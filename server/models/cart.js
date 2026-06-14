import mongoose from "mongoose";
import { Schema } from "mongoose";

const cartSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Products',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    totalprice: {
        type: Number,
        required: true,
        default: 0
    },
    totalqauntity: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
});

export const Cart =  mongoose.model("Cart", cartSchema);