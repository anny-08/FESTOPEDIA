import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true, 
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    usertype: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true  
    },
    blogtype: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date
    }
});


const post = mongoose.model('post', PostSchema);

export default post;