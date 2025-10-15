import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();


import connetDB from "./db/index.js";   
connetDB();     























/*
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`✅ MongoDB connected: ${connectionInstance.connection.host}`);
    app.on("error", (error)=>{
        console.log("❌ Error while connecting to the database:", error);
        throw error;
    });
    const PORT = process.env.PORT || 3000;
    app.listen(process.env.PORT, ()=>{
        console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
    
  } catch (error) {
    console.log("❌ Error while connecting to the database:", error);
    process.exit(1); // stop the app if DB connection fails
  }
};

connectDB();

*/
