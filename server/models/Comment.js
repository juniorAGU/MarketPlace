import mongoose from "mongoose";
import { Schema } from "mongoose";

const commentSchema = new Schema({
    Product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: trusted
    },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
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