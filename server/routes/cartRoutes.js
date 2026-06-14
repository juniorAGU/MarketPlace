import express from 'express';
import { CreateCart, getCart,UpdateCart,DeleteSpecificCart,DeleteCart } from '../controllers/cartController.js';
import protect from '../middlewears/protect.js';
import Authorize from '../middlewears/rbac.js';
import abac from '../middlewears/Abac.js';


export const CartRoutes = express.Router();

CartRoutes.post("/api/cart", protect, Authorize(["buyer"]), CreateCart);
CartRoutes.get("/api/cart", protect, Authorize(["buyer"]), getCart);

CartRoutes.patch("/api/cart/:itemId", protect,  Authorize(["buyer"]), abac("updateItem"), UpdateCart);
CartRoutes.delete("/api/cart/itemId", protect, Authorize(["buyer"]), abac("deleteItem"), DeleteSpecificCart);
CartRoutes.delete("/api/cart/", protect,  Authorize(["buyer"]), abac("deleteItem"), DeleteCart);