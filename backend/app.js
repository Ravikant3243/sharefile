import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import mongoose from "mongoose";
import fileRouter from "./routes/file-routes.js";

const DB_URL = process.env.DB_URL;
const app=express();
app.use(express.json());
app.use("/", fileRouter);
app.use(cors());
app.use(express.urlencoded({extended:true}))
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Database connection established!");
    app.listen(8080, () => {
      console.log("sever is running on 8080 !");
    });
  })
  .catch((error) => {
    console.log("error :", error.message);
  });
