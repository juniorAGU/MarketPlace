import express from "express";
import protect from '../middlewears/protect.js'
import Authorize from '../middlewears/rbac.js';
import { CreateOrder } from "../controllers/orderController.js";

export const orderRouter = express.Router();
orderRouter.post("/api/checkout",protect, Authorize("buyer"), CreateOrder)
