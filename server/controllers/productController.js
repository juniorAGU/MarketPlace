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
    try{
        const { category } = req.query;

        const filter = {};

        if(category) filter.category = category

        const allproduct = await Products.find(filter)
                .sort({createdAt: -1})
                .populate("seller", "name image")
                .lean();

        res.status(200).json({
            success: true,
            message: "successful",
            products: allproduct
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "internal Server Error!!"
        })
    }

}

const getSpecificProduct = async (req,res,next) => {
    try{

        const id = req.params.id;

        const findProduct = await Products.findById(id).populate("seller", "name image").lean();

        if(!findProduct){
            return res.status(404).json({
                success: false,
                message: "unable to get products"
            });
        };

        res.status(200).json({
            success: true,
            message: "successful",
            products: findProduct
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "internal Server Problems"
        });
    }

}

const getSellersProduct = async (req,res,next) => {
    try{
        res.status(200).json({
            success: true,
            message: "successful",
            products: res.pagination
        })

    }catch(err){
        console.log(err)
        res.status(500).json({
            success: false,
            message: "internal server Error"
        })
    }

}

const DeleteProduct = async (req, res, next) => {
    try{

        const productId = req.params.id;

        const product =  await Products.findById(productId);
        
        if(!product){
            return res.status(404).json({
                success: false,
                message: "product not found"
            });
        };

        await Products.findByIdAndDelete(productId);

        res.status(200).json({
            success: true,
            message: "Deleted Successfully"
        })


    }catch(err){
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "internal server issues"
        });
    }
}

export {CreateProducts,UpdateProduct,getProduct,DeleteProduct,getSpecificProduct,getSellersProduct}