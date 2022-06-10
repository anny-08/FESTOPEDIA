import axios from 'axios';

const url = 'http://localhost:5000';

export const createPost = async (post) => {
    try {
        return await axios.post(`${url}/create`, post);
    } catch (error) {
        console.log('Error while calling createPost API ', error);
    }
}

export const getAllPosts = async(param) => {
    try {
       let response = await axios.get(`${url}/posts${param}`);
       return response.data;
    } catch (error) {
        console.log('Error while calling getAllPosts API ', error);
    }
}

export const getPost = async(id) => {
    try {
        let response = await axios.get(`${url}/post/${id}`);
        return response.data;
    } catch(error) {
        console.log('Error while calling getPost API', error);
    }
}

export const updatePost = async(id, post) => {
    try {
        return await axios.post(`${url}/update/${id}`, post);
    } catch(error) {
        console.log('Error while calling updatePost API', error);
    }
}

export const deletePost = async(id) => {
    try {
        return await axios.delete(`${url}/delete/${id}`);
    } catch(error) {
        console.log('Error while calling deletePost API', error);
    }
}

export const uploadFile = async (data) => {
    try {
        return await axios.post(`${url}/file/upload`, data);
    } catch(error) {
        console.log('Error while uploading the image file', error);
    }
}

export const newComment = async (data) => {
    try {
        return await axios.post(`${url}/comment/new`, data);
    } catch (error) {
        console.log('Error while calling newComment API', error);
    }
}

export const getComments = async (id) => {
    try {
        let response = await axios.get(`${url}/comments/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getComments API', error);
    }
}

export const deleteComment = async (id) => {
    try {
        return await axios.delete(`${url}/comment/delete/${id}`);
    } catch (error) {
        console.log('Error while calling deleteComment API', error);
    }
}

export const verifyEmail = async (userID, otp) => {
    try {
        const {data} = await axios.post(`${url}/verify-email`, {userID, otp});
        return data;
    } catch (error) {
        console.log('Error while calling verifyEmail  API ', error);
    }
}

export const updateUser = async(id, userData) => {
    try {
        return await axios.post(`${url}/settings/update/${id}`, userData);
    } catch(error) {
        console.log('Error while calling updateUser API', error);
    }
}

export const deleteUser = async(id) => {
    try {
        return await axios.delete(`${url}/settings/delete/${id}`);
    } catch(error) {
        console.log('Error while calling deleteUser API', error);
    }
}