import { request, response } from 'express'; 
import jwt from 'jsonwebtoken';
import User from '../schema/user-schema.js';


export const Authenticate=async(request,response,next)=>{
    try{
        const token=request.cookies.jwtoken;
        const verifyToken = jwt.verify(token,process.env.JWT_SECRET);

        const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token":token});

        if(!rootUser){throw new Error('User not Found')}
 
        request.token = token;
        request.rootUser = rootUser;

        next();

    }catch(err){
        response.status(500).send('Unauthorized:No Token Provided');
        console.log(err);
    }
}
 