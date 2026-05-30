import sanitizer from 'mongo-sanitize';
import { UploadToCloudinary } from '../CloudinaryConfig/cloudinary.js';



const CreateProducts = async(req,res,next) => {
    try{}catch(err){
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

export {CreateProducts,UpdateProduct}