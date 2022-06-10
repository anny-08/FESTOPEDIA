import express, { Router } from 'express';
import { registerUser, loginUser, logoutUser, verifyEmail, forgotPassword, resetPassword, updateUser, deleteUser} from '../controller/user-controller.js';
import {createPost,  getAllPosts, getPost, updatePost, deletePost} from '../controller/post-controller.js';
import { uploadImage, getImage } from  '../controller/image-controller.js';
import upload from '../utils/upload.js';
import { newComment, getComments, deleteComment } from '../controller/comment-controller.js';
import {Authenticate} from '../middleware/authenticate.js';
import { isResetTokenValid } from '../middleware/user.js';

const router = express.Router();

router.post('/register',registerUser);
router.post('/verify-email',verifyEmail);
router.post('/forgot-password',forgotPassword);
router.post('/reset-password',isResetTokenValid,resetPassword);
router.get('/verify-token',isResetTokenValid, (req, res) => {
    res.json({ success: true});
});
router.post('/login',loginUser);
router.get('/logout',logoutUser);

router.post('/create',createPost );

router.get('/posts', getAllPosts);
router.get('/post/:id', getPost);

router.post('/update/:id', updatePost);
router.delete('/delete/:id', deletePost);

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

router.post('/comment/new', newComment);
router.get('/comments/:id', getComments);
router.delete('/comment/delete/:id', deleteComment);

router.get('/getdata',Authenticate,(req,res)=>{
    res.send(req.rootUser);
})
router.post('/settings/update/:id', updateUser);
router.delete('/settings/delete/:id', deleteUser);

export default router; 
 