import mongoose from "mongoose";
import { Schema } from "mongoose";

const likeSchema = new Schema({
    name: String,
    likescount: {
        type: Number,
        default: 0
    },
    likes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
}, 
{
    timestamps: {
        type: Date,
        default: Date.now,
    }
});

export const Likes = mongoose.model("Likes",likeSchema)