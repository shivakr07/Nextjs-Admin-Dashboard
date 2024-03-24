// import mongoose from "mongoose";

// export const connectToDB = async() => {
//     const connection = {};

//     try{
//         if(connection.isConnected) return;
//         const db = await mongoose.connect(process.env.MONGO);
//         console.log(db);
//         connection.isConnected = db.connection[0].readyState;

//     } catch(error){
//         console.log(error);
//         throw new Error(error);
//     }
// } 


import mongoose from 'mongoose';

export const connectToDB = async () => {
    try {
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(process.env.MONGO, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        }
        console.log('MongoDB connected successfully.');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};