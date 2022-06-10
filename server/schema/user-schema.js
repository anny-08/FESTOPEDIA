import mongoose from 'mongoose';
import  jwt  from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const UserSchema = mongoose.Schema(
  {
    u_name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    ut_name: {
      type: String,
      required: true,
    },
    profile_pic: {
      type: String,
      default: "",
    },
    verified : {
      type: Boolean,
      default: false,
      required: true,
    },
    tokens:[
      {
        token:{
          type: String,
          expires: 10,
          required:true
        }
      }
    ]
  },
  { timestamps: true }
);

UserSchema.methods.comparePassword = async function (password){
  const result = await bcrypt.compareSync(password, this.password);
  return result;
}

//generating token
UserSchema.methods.generateAuthToken = async function(){
  try {
    let token = jwt.sign({_id: this._id},process.env.JWT_SECRET);
    this.tokens = this.tokens.concat({token:token})
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
}
 
const user = mongoose.model("user", UserSchema);

export default user;