import express from 'express';
import protect from '../middlewears/protect.js';
import { Upload } from '../CloudinaryConfig/cloudinary.js';
import { CreateProducts, UpdateProduct,getProduct,DeleteProduct,getSpecificProduct } from '../controllers/productController.js';
import abac from '../middlewears/Abac.js';
import Authorize from '../middlewears/rbac.js';

export const productRouth = express.Router();

productRouth.get("/api/products", protect, getProduct);
productRouth.get("/api/products/:id",protect,getSpecificProduct)
productRouth.post("/api/products", protect, Authorize(["seller"]), Upload.array("images",5), CreateProducts);
productRouth.patch("/api/products", protect, abac("updateItem"),Upload.single("image"), UpdateProduct);
productRouth.delete("/api/products",protect, Authorize(["seller"]),abac("deleteItem"), DeleteProduct);