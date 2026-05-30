import dotenv from 'dotenv';
dotenv.config();    

import {v2 as cloudinary} from 'cloudinary';
import multer from 'multer';
import streamifier from 'streamifier';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.SECRET_KEY
});
console.log('Cloud name:', process.env.CLOUD_NAME);

export const Upload = multer({
    storage: multer.memoryStorage()
});

export const UploadToCloudinary = (buffer) => {
    return new Promise ((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {folder: "cloude-pictures"},
            (error,result) => {
                if(error) reject(error)
                    else resolve(result)
            }
        )
        streamifier.createReadStream(buffer).pipe(stream);
    })
}