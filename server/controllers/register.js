import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import sanitizer from 'mongo-sanitize';
import { Upload, UploadToCloudinary } from '../CloudinaryConfig/cloudinary.js';

const CreateUser = async (req, res, next ) => {
    try{
        const cleaned = sanitizer(req.body)
        const {name, email, password} = cleaned;
        
        if(!name || !email || !password){
            return res.status(400).json({
                success: false,
                message: "inputs must not be empty"
            });
        }

        const checkExist = await User.findOne({email});

        if(checkExist){
            return res.status(400).json({
                success: false,
                message: "Account Already Existed",
            })
        }

        const hashed = await bcrypt.hash(password,10);

        const newUser =  await User.create({
            name,
            email,
            password: hashed,
            role: "user",
            subscription: "free",
            createdAt: Date.now()
        });

        const token = await jwt.sign(
            {userId: newUser._id, email: newUser.email, role: newUser.role},
            process.env.JWT_TOKEN,
            {expiresIn: process.env.EXPIRESIN}
        );

        const oneDayInMs = 24 * 60 * 60 * 1000; 

        res.cookie("token", token ,{
            httpOnly: true,
            maxAge: oneDayInMs,
            secure: false,
            samSite: "lax"
        });


        res.status(200).json({
            success: true,
            message: "successfull",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role
            }
        });



    }catch(err){
        return console.log(err)
    }

}

const UpdateUser = async(req,res,next) => {
    try{
        console.log('File:', req.file);

        const userId = req.user._id;
        console.log("user id", userId)

        const cleaned = sanitizer(req.body);

        const {  bio, title, name, location, phone,email} = cleaned;

        if( !bio || !title || !name || !location || !phone || !email){
            return res.status(400).json({
                success: false,
                message: "Inputs must not be Empty"
            });
        };

        if(!req.file){
            return res.status(400).json({
                success: false,
                message: "Image not Recognised"
            });
        };

        const cloudinaryResult = await UploadToCloudinary(req.file.buffer);

        const image = cloudinaryResult.secure_url;
        console.log("image", image)

        const findAndUpdate = {
            name,
            bio,
            title,
            email,
            phone,
            location
        };

        if(image){
            findAndUpdate.image = image
        }


        const findUpdate = await User.findByIdAndUpdate(
            userId,
            findAndUpdate,
            {new: true}
        );

        if(!findUpdate){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        };

        res.status(200).json({
            success: true,
            message: "Successfull",
            user: findUpdate
        })


    }catch(err){
        console.log("updating user Error",err)
        return res.status(500).json({
            success: false,
            message: "Internal Server issue ,User not Updated"
        })
    }

}

const GetUser = async (req,res,next) => {
    try{}catch(err){
        return console.log(err)
    }
}

export { CreateUser, GetUser, UpdateUser}