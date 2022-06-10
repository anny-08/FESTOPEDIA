import { request, response } from 'express';
import User from '../schema/user-schema.js';
import VerificationToken from '../schema/verificationToken-schema.js';
import ResetToken from '../schema/resetPassword-schema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { generateEmailTemplate, generateOTP, generatePasswordResetTemplate, generateVerifiedTemplate, generateResetThankuTemplate } from '../utils/mail.js';
import mailgun from 'mailgun-js';
import { createRandomBytes, sendError } from '../utils/helper.js';
import pkg from 'mongoose';
const { isValidObjectId } = pkg;

//Register
export const registerUser = async (request, response) => {
  console.log(request.body);
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(request.body.password, salt);
    const newUser = new User({
      u_name: request.body.u_name,
      email: request.body.email,
      password: hashedPass,
      ut_name: request.body.ut_name,
    });
    var pattern = /^[a-z0-9_]{5,}@banasthali.in$/;
    var pattern_student = /^btbt[a-z0-9_]{5,}@banasthali.in$/;
    if (pattern.test(newUser.email)) {
      if(pattern_student.test(newUser.email)&&newUser.ut_name==="Professor"){response.status(500).json(error)}
      else if(!pattern_student.test(newUser.email)&&newUser.ut_name==="Student"){response.status(500).json(error)}
      else if(!(newUser.email==="btbtc19048_himanshi@banasthali.in"||newUser.email==="btbtc19158_ananya@banasthali.in"||newUser.email==="btbtc19133_isha@banasthali.in")&&newUser.ut_name === "Admin"){response.status(500).json(error)}
      else{
      const OTP = generateOTP()
      const verificationToken = new VerificationToken({
        owner: newUser._id,
        token: OTP
      }) 

      await verificationToken.save();
      const user = await newUser.save();

      
     
      const mg = mailgun({ apiKey: process.env.api_key, domain: process.env.MG_DOMAIN });
      const data = {
        from: "Project_EmailVerification <semesterproject17@gmail.com> ",
        to: newUser.email,
        subject: 'Verify your email account',
        html: generateEmailTemplate(OTP),
      };
      mg.messages().send(data, function (error, body) {
        console.log(body);
      });


      response.status(200).json(user);}
    }
    else {
      response.status(500).json(error);
    }

  } catch (error) {
    response.status(500).json(error);
  }
}

//LOGIN
export const loginUser = async (request, response) => {
  try {
    let token;
    const user = await User.findOne({ u_name: request.body.u_name });
    !user && response.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(request.body.password, user.password);
    !validated && response.status(400).json("Wrong credentials!");

    if(user.verified == false){
      response.status(400).json("You are not a verified user");
    }

    token = await user.generateAuthToken();
    console.log(token);

    response.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 28900000),
      httpOnly: true
    });
    const { password, ...others } = user._doc;
    //response.status(200).json({user:{name:user.u_name,email:user.email,id:user._id,token},});
    response.status(200).json(others);
  } catch (error) {
    response.status(500).json(error);
  }
}

//logout
export const logoutUser = (request, response) => {
  response.clearCookie('jwtoken', { path: '/' })
  response.status(200).send('User Logout');
}

export const verifyEmail = async (req, res) => {
  const { userID, otp } = req.body
   if(!userID || !otp.trim()) return sendError(res, 'Invalid request, missing parameters!')
   if(!isValidObjectId(userID)) return sendError(res, 'Invalid user id!')

  const user = await User.findById(userID)
  if(!user) return sendError(res, 'User not found!')
 
   if(user.verified) return sendError(res, 'This account is already verified!')

  const token = await VerificationToken.findOne({ owner: user._id })
   if(!token) return sendError(res, 'user not found!')

  const isMatched = await token.compareToken(otp)
   if(!isMatched) {
     console.log("otp not matched")
     res.json({ status: 400, success: false, message: " email is not verified" })
    }
   else{
  user.verified = true;

  await VerificationToken.findByIdAndDelete(token._id);
  await user.save()
  
 
  
      const mg = mailgun({ apiKey:process.env.api_key, domain: process.env.MG_DOMAIN });
      
  const data = {
    from: "no-reply@festopedia.org ",
    to: user.email,
    subject: 'Your account has been successfully verified!',
    html: generateVerifiedTemplate(),
  };
  mg.messages().send(data, function (error, body) {
    console.log(body);
  });
  res.json({ status: 200, success: true, message: " email is verified" })}
}

 export const forgotPassword = async (req, res) => {
  const {email} = req.body;
  if(!email) return sendError(res,'Please provide a valid email!');

  const user = await User.findOne({email});
  if(!user) return sendError(res,'User not found!');

  const token = await ResetToken.findOne({owner: user._id})
  if(token) return sendError(res,'Only after one hour you can request for another token!');

  const RandomBytes = await  createRandomBytes()
  const resetToken = new ResetToken({owner: user._id, token: RandomBytes})
  await resetToken.save();

  
 
  
  const mg = mailgun({ apiKey:process.env.api_key, domain: process.env.MG_DOMAIN });
      
  const data = { 
    from: "no-reply@festopedia.org ",
    to: user.email,
    subject: 'Link to reset your password.',
    html: generatePasswordResetTemplate(`http://localhost:3000/reset-password?token=${RandomBytes}&id=${user._id}`),
  };
  mg.messages().send(data, function (error, body) {
    console.log(body);
  });

  res.json({ success: true, message: 'Password resent link is sent to your email.' })

}

export const resetPassword = async (req, res) =>{
  const {password} = req.body;

  const user = await User.findById(req.user._id);
  if(!user) return sendError(res, 'user not found!')
  
  // const isSamePassword = await user.comparePassword(password) 
  // if(isSamePassword) sendError(res, 'New Password must be different!')

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  user.password = hashedPass;
  await user.save();

  await ResetToken.findOneAndDelete({owner: user._id})

  
 
  
  const mg = mailgun({ apiKey:process.env.api_key, domain: process.env.MG_DOMAIN });
      
  const data = {
    from: "no-reply@festopedia.org ",
    to: user.email,
    subject: 'Password reset successfully.',
    html: generateResetThankuTemplate(),
  };
  mg.messages().send(data, function (error, body) {
    console.log(body);
  });

  res.json({ success: true, message: ' Password reset successfully' })

}

export const updateUser = async (request, response) => {
  try {
      await User.findByIdAndUpdate(request.body._id, { $set : request.body});
      response.status(200).response('User updated succesfully!');
  } catch (error) {
      response.status(500).json(error);
  }
} 

export const deleteUser = async(request, response) => {
  try{
      let user= await User.findById(request.params.id);
      await user.delete();
      response.status(200).response('User deleted succesfully!');
  } catch (error) {
    response.status(500).json(error);
  }
}