import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js"; as we don't use DB_NAME in this file, we can directly use it in the connection string in db/index.js
import express from "express";
// const app = express();
import app from "./app.js"; // as we are handling all app related configurations in app.js, we can directly import the configured app here
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/index.js";
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("❌ Error while connecting to the database:", error);
    throw error;
  });

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
