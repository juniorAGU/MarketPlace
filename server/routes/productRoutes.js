import express from 'express';
import protect from '../middlewears/protect.js';
import { Upload } from '../CloudinaryConfig/cloudinary.js';
import { CreateProducts, UpdateProduct } from '../controllers/productController.js';
import abac from '../middlewears/Abac.js';
import Authorize from '../middlewears/rbac.js';

export const productRouth = express.Router();

productRouth.post("/api/products", protect, Authorize(["seller"]), Upload.array("images",5), CreateProducts);

productRouth.patch("/api/products", protect, abac("updateItem"),Upload.single("image"), UpdateProduct);