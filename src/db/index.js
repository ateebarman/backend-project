import mongoose from "mongoose";    
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try{
     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n✅ MongoDB connected: ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("Error while connecting to the database", error);
        process.exit(1); // stop the app if DB connection fails
    }
}

export default connectDB;










