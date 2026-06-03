import express from 'express';
import protect from '../middlewears/protect.js';
import {CreateComment, getComment,DeleteComment} from '../controllers/commentControllers.js'

export const CommentRoute = express.Router();

CommentRoute.post("/api/comments", protect, CreateComment);
CommentRoute.get("/api/comments/:id", protect, getComment);