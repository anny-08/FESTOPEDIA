import mongoose from 'mongoose';

const Connection = async () => {
    try {
        const URL='mongodb+srv://Project_Festopedia:visem@blogwebsite.samqm.mongodb.net/FESTOPEDIA?retryWrites=true&w=majority'
        await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Database connected successfully');
    } catch(error) {
        console.log('Error while connecting to MongoDB', error);
    }
}

export default Connection;