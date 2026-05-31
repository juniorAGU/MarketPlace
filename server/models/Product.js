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
    images: {
        type: [String],
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["electronics", "fashion", "home & garden", "sports", "books", "beauty", "automotive", "others"]
    },
    condition: {
        type: String,
        enum: ["Brand New", "Like New", "Used - Good", "Used - Fair"]
    },
    quantity: {
        type: Number,
        default: 1,
        min: 1
    },
    shippingFee: {
        type: Number,
        default: 0,
        min: 0
    },
    deliveryTime: {
        type: String
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