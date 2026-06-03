import { Likes } from "../models/Likes.js";

const creatLikes = async(req,res,next) =>{
    try{}catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}
const GEtlikes = async (req,res,next) => {
    try{}catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}
export  {creatLikes,GEtlikes}