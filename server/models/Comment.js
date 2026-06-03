import mongoose from "mongoose";
import { Schema } from "mongoose";

const commentSchema = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    text: {
        type: String,
        required: true,
        trim: true
    },
},{
    timestamps: {
        type: Date,
        default: Date.now
    }
});

export const Comments = mongoose.model("Comments",commentSchema);