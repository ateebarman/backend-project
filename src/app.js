import express from "express";
import cors from "cors";
import cookoieParser from "cookie-parser";
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({limit: "16kb"}));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

app.use(cookoieParser());

// routes import
import userRoutes from "./routes/user.routes.js"


// routes declaration

app.use("/api/v1/users", userRoutes); // api , version , route





export default app;
// can also like export { app }
