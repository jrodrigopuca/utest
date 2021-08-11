import express from 'express';
import controller from '../controllers/postsController';
const router = express.Router();

router.get('/posts', controller.getPosts);
router.get('/posts/:id', controller.getPost);
router.put('/posts/:id', controller.updatePost);
router.post('/posts', controller.addPost);

export default router;