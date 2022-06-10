import pkg from 'mongoose';
import User from '../schema/user-schema.js';
import ResetToken from '../schema/resetPassword-schema.js';
const { isValidObjectId } = pkg;
import { sendError } from "../utils/helper.js";

export const isResetTokenValid = async (req, res, next) => {
    const {token ,id}=req.query;
    if(!token || !id) return sendError(res, "Invalid request")

    if(!isValidObjectId(id)) return sendError(res, "Invalid user");

    const user = await User.findById(id)
    if(!user) return sendError(res, "user not found!");

    const resetToken = await ResetToken.findOne({owner: user._id})
    if(!resetToken) return sendError(res, "Reset Token not found!");

    const isValid = await resetToken.compareToken(token)
    if(!isValid) return sendError(res, "reset token is not invalid!");

    req.user = user
    next()
};