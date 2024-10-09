import express, { Request, Response } from 'express';
import { deleteBlogById, getBlogById, getBlogs } from '../controllers/blog.controller';
// import { getBlogs } from '../controllers/blog.controller';

const router = express.Router();

// get all blogs
router.get('/', getBlogs);

// get blog by id
router.get('/:id', getBlogById);

// delete blog by id
router.delete('/:id', deleteBlogById);

export default router;
