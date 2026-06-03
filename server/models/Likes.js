import mongoose from "mongoose";
import { Schema } from "mongoose";

const likeSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }
}, {timestamps: true});

export const Likes = mongoose.model("Likes",likeSchema)