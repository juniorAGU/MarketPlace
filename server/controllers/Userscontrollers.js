import { User } from "../models/User.js";

const getCurrentUser1 = async (req,res,next) => {

    try{


        const currentUser = await User.findById(req.user._id)
        .select("-password")
        .lean();

        if(!currentUser){
            return res.status(404).json({
                success: false,
                message: "user not found"
            });
        };

        res.status(200).json({
            success: true,
            message: "successfull",
            user: currentUser
        });

    }catch(err){
        console.log(err);
        throw err
    }

}

const getAllUsers1 = async (req,res,next) => {

    const allUsers = User.find().sort({createdAt: -1});

    res.status(200).json({
        success: true,
        message: "successfull",
        users: allUsers
    });

}

export  {
    getAllUsers1, 
    getCurrentUser1
}