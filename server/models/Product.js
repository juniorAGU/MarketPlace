import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["electronics", "clothing", "books", "others"]
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ["available", "pending", "sold"],
        default: "available"
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        default: null
    }
},
    {
        timestamps: {
            type: Date,
            default: Date.now
        }
    }
);

export const Products = mongoose.model("Products", productSchema);