import express from 'express';
import { CreateUser,GetUser,UpdateUser } from '../controllers/register.js';
import { CreatOneLog } from '../controllers/login.js';
import { AuthLimiter } from '../middlewears/ratelimiter.js';
import protect from '../middlewears/protect.js';
import { Upload } from '../CloudinaryConfig/cloudinary.js';
import { getCurrentUser1,getAllUsers1 } from '../controllers/Userscontrollers.js';
import { paginat } from '../middlewears/pagination.js';
import { User } from '../models/User.js';
import { logoutUser } from '../controllers/logout.js';

export const authRoute = express.Router();

authRoute.post("/api/login",  CreatOneLog);
authRoute.post("/api/register",AuthLimiter,   CreateUser);
authRoute.post("/api/logout", logoutUser);

authRoute.get("/api/users", protect, paginat(User), getAllUsers1)
authRoute.get("/api/user/me", protect, getCurrentUser1)

authRoute.patch("/users/profile", protect, Upload.single("image"), UpdateUser);