import { Comments } from "../models/Comment.js";
import sanitize from "mongo-sanitize";
import { Products } from "../models/Product.js";
import { User } from "../models/User.js";


const CreateComment = async (req,res,next) => {
    try{

        const cleaned = sanitize(req.body);

        const {text, productId} = cleaned;

        if(!text || !productId){
            return res.status(400).json({
                success: false,
                message: "inputs must not be Empty"
            });
        };


        const comment = await Comments.create({
            text,
            product: productId,
            user: req.user._id
        });

        const findcomment = await Comments.findById(comment._id)
                .sort({createdAt: -1})
                .populate("user", "name image")
                .lean();
        
        res.status(200).json({
            success: true,
            message: "successful",
            comments: findcomment
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "internal server Error"
        })
    }
}
const getComment = async (req,res,next) => {
    try{

        const productid = req.params.id;

        const comments = await Comments.find({product: productid})
                    .sort({createdAt: -1})
                    .populate("user", "name image")
                    .lean();

        if(!comments){
            return res.status(404).json({
                success: false,
                message: "comments not found"
            });
        };

        res.status(200).json({
            success: true,
            message: "successful",
            comments: comments
        })


    }catch(err){
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "internal server issue"
        })
    }

}

const DeleteComment = async (req,res,next) => {
    try{

        const productId = req.params.id;

        const findDelete = await Comments.findByIdAndDelete(productId);

        res.status(200).json({
            success: true,
            message: "successfully Deleted"
        });

    }catch(err){
        console.log(err)
        return res.status(500).json({
            message: false,
            message: "internal server issues"
        })
    }

}

export  { CreateComment,getComment,DeleteComment}