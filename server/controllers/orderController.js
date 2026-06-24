import { Order } from "../models/orders.js";
import { Cart } from "../models/cart.js";
import { Products } from "../models/Product.js";
import sanitize from "mongo-sanitize";
import { populate } from "dotenv";

const CreateOrder = async (req,res,next) => {
    try{
        const cleaned = sanitize(req.body);

        const { shippingAddress } = cleaned;

        if(!shippingAddress.phone || !shippingAddress.address || !shippingAddress.name){
            return res.status(400).json({
                success: false,
                message: "inputs must not be empty"
            })
        }
        
        const userId = req.user._id;

        const cart =  await Cart.findOne({user: userId}).populate({path: "items.product", populate: {path: "seller", select: "name"}});

        if(!cart || cart.items.length === 0){
            return res.status(404).json({
                success: false,
                message: "cart is Empty"
            });
        };

        const groupSeller = {};

        cart.items.forEach(item => {
            const sellerId = item.product.seller._id.toString();
            if(!groupSeller[sellerId]){
                groupSeller[sellerId] = [];
            }
            groupSeller[sellerId].push({
                product: item.product._id,
                name: item.product.name,
                price: item.price,
                quantity: item.quantity,
                image: item.product?.images?.[0]
            });
        });

        const orders = []

        for(const [sellerId, items] of Object.entries(groupSeller)){
            const totalAmount = items.reduce((sum,pro) => sum + (pro.price * pro.quantity),0);

            const order = await Order.create({
                seller: sellerId,
                buyer: userId,
                items,
                shippingAddress,
                totalAmount,
                status: "pending"
            });

            orders.push(order)
        }

        for (const item of cart.items){
            await Cart.findByIdAndUpdate(item.product._id, {
                $inc: {quantity: -item.quantity}
            })
        }

        await Cart.findOneAndDelete({user: userId});


        res.status(200).json({
            success: true,
            message: "successful",
            orders: orders
        });

    }catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "internal server Issues"
        });
    };
}
export{ CreateOrder}