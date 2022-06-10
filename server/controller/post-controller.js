import { request, response } from 'express'; 
import Post from '../schema/post-schema.js';
import {Authenticate} from '../middleware/authenticate.js';

export const createPost = async (request, response) => {
    response.send(request.rootUser);
    console.log(request.body);
    try {
        const post = await new Post(request.body);
        post.save();
        response.status(200).json('Post saved successfully');
    } catch (error) {
        //response.status(500).json(error);
    }
}
 
export const getAllPosts = async (request, response) => {
    let username = request.query.username;
    let category = request.query.category;
    let blogtype = request.query.blogtype;
    let posts;

    try {
        if(username)
            posts =  await Post.find({ username : username});
        else if(category)
            posts =  await Post.find({ category : category});
        else if(blogtype)
            posts = await Post.find({ blogtype : blogtype });
        else
            posts = await Post.find({}).sort({createdDate : -1});
            
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error);
    }
} 

export const getPost = async (request, response) => {
    try {
        let post = await Post.findById(request.params.id);
        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error);
    }
}

export const updatePost = async (request, response) => {
    try {
        await Post.findByIdAndUpdate(request.params.id, { $set : request.body});
        response.status(200).response('Blog updated succesfully!');
    } catch (error) {
        response.status(500).json(error);
    }
} 

export const deletePost = async (request, response) => {
    try {
        let post = await Post.findById(request.params.id);
        await post.delete();
        response.status(200).response('Blog deteled succesfully!');
    } catch (error) {
        response.status(500).json(error);
    }
}
 