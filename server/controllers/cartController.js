import { Cart } from "../models/cart.js";
import { Products } from "../models/Product.js";
import { User } from "../models/User.js";
import sanitize from "mongo-sanitize";

const CreateCart = async (req,res,next) => {
    try{
        const userId = req.user._id;

        const cleaned = sanitize(req.body);

        const { productId , quantity = 1} = cleaned;

        const product = await Products.findById(productId);

        if(!product){
            return res.status(404).json({
                success: false,
                message: "product not found"
            });
        };

        let exist = await Cart.findOne({user: userId});

        if(!exist){
            exist = await Cart.create({
                user: userId,
                items: [{
                    product: productId,
                    quantity: quantity,
                    price: product.price
                }],
                totalprice: product.price * quantity,
                totalqauntity: quantity
            })
        }else{
            const existing = exist.items.find(item => item.product.toString() === productId);

            if(existing){
                existing.quantity += quantity
            }else{
                exist.items.push({
                    product: productId,
                    price: product.price,
                    quantity: quantity
                })
            };

            exist.totalprice = exist.items.reduce((sum, item) => sum + (item.price * item.quantity),0);

            exist.totalqauntity = exist.items.reduce((sum,item) => sum + item.quantity,0);

            await exist.save();
        };

        const created = await Cart.findById(exist._id)
                .populate("items.product", "name  image price")
                .lean();

        res.status(200).json({
            success: true,
            message: "successful",
            cart: created
        })

    }catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "internal server Error"
        })
    };
};

const getCart = async (req,res,next) => {
    try{

        const userId = req.user._id;

        const cart = await Cart.findOne({ user: userId })
            .populate("items.product", "name images price")
            .lean();

        if (!cart) {
            return res.status(200).json({ 
                success: true, 
                cart: { items: [], totalprice: 0, totalQuantity: 0 } 
            });
        }

        res.status(200).json({ success: true, cart });

    }catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "internal server error"
        });
    };
};

const UpdateCart = async (req,res,next) => {
    try{}catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "internal server error"
        });
    };
};

const DeleteSpecificCart = async (req,res,next) => {
    try{}catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "internal server error"
        });
    };
};

const DeleteCart = async (req,res,next) => {
    try{}catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "internal server error"
        });
    };
}

export {
    CreateCart,
    getCart,
    UpdateCart,
    DeleteSpecificCart,
    DeleteCart
}