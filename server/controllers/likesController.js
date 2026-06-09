import { Likes } from "../models/Likes.js";
import sanitize from "mongo-sanitize";

const creatLikes = async(req,res,next) =>{
    try{
    
        const  productId  = req.params.id;

        const userId = req.user._id;

        const existLike = await Likes.findOne({user: userId, product: productId});

        if(!existLike){

            await Likes.create({user: userId, product: productId});

            const count = await Likes.countDocuments({product: productId});

            res.status(200).json({
                success: true,
                message: "successful",
                islike: true,
                count: count
            });
        };

        await Likes.findByIdAndDelete(existLike._id);

        const count = await Likes.countDocuments({product: productId});

        res.status(200).json({
            success: true,
            message: "successful",
            likes: false,
            count: count
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}
const GEtlikes = async (req,res,next) => {
    try{
        const  productId  = req.params.id;

        const count = await Likes.countDocuments({product: productId});

        res.status(200).json({
            success: true,
            message: "successful",
            likes: true,
            count: count
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}
export  {creatLikes,GEtlikes}