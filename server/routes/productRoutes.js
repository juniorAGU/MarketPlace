import express from 'express';
import protect from '../middlewears/protect.js';
import { Upload } from '../CloudinaryConfig/cloudinary.js';
import { CreateProducts, UpdateProduct } from '../controllers/productController.js';

export const productRouth = express.Router();

productRouth.post("/api/products", protect, Upload.single("image"), CreateProducts);

productRouth.patch("/api/products/:id", protect, Upload.single("image"), UpdateProduct);