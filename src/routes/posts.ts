import express from 'express';
import {getPosts, getPost, updatePost, addPost} from '../controllers/postsController';
const router = express.Router();

router.get('/posts', getPosts);
router.get('/posts/:id', getPost);
router.put('/posts/:id', updatePost);
router.post('/posts', addPost);

export default router;