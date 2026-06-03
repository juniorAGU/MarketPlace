import express from 'express';
import protect from '../middlewears/protect.js';
import { creatLikes,GEtlikes } from '../controllers/likesController.js';

export const LikesRouth = express.Router();

LikesRouth.post("/api/likes",protect, creatLikes);
LikesRouth.get("/api/likes/:id",protect, GEtlikes)
