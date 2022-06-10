import crypto from 'crypto'

export const sendError = (res, error, status = 402) => {
    res.status(status).json({success: false, error});
};

export const createRandomBytes =() => new Promise((resolve,reject)=>{
    crypto.randomBytes(30, (err, buff)=>{
        if(err)reject(err);

        const token =buff.toString('hex');
        resolve(token)
    });
});