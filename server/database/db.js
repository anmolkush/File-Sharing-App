

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("DB CONNECTION SUCCESSFUL");
    } catch (error) {
        console.error('Error while connecting to the database', error.message);
    }
}

export default DBConnection;
