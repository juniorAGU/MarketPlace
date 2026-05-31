import sanitizer from 'mongo-sanitize';
import { UploadToCloudinary } from '../CloudinaryConfig/cloudinary.js';
import { Products } from '../models/Product.js';
import { User } from '../models/User.js';



const CreateProducts = async(req,res,next) => {
    try{

        const cleaned = sanitizer(req.body);

        const {name, category, condition, price, quantity, description, shippingFee, deliveryTime, } = cleaned;

        if(!name || !category || !condition || !price || !quantity || !description || !shippingFee || !deliveryTime){
            return res.status(400).json({
                success: false,
                message: "inputs must not not be Empty!!"
            });
        };

        if(!req.files){
            return res.status(400).json({
                success: false,
                message: "there is no image"
            });
        };

        const cloudinaryUploader = await  Promise.all(req.files.map(file => UploadToCloudinary(file.buffer) ));

        const images = cloudinaryUploader.map(img => img.secure_url);

        const created  = await Products.create({
            name,
            category,
            condition,
            price,
            quantity,
            description,
            deliveryTime,
            shippingFee,
            images,
            seller: req.user._id
        });

        res.status(200).json({
            success: true,
            message: "Successful",
            products: created
        })

    }catch(err){
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error, unable to Save product"
        });
    }
};

const UpdateProduct = async (req,res,next) => {
    try{}catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error, Unable to Update product"
        });
    }
};

const getProduct = async (req,res,next) => {
    try{}catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "internal Server Error!!"
        })
    }

}

const DeleteProduct = async (req, res, next) => {
    try{}catch(err){
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "internal server issues"
        });
    }
}

export {CreateProducts,UpdateProduct,getProduct,DeleteProduct}