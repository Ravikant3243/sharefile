import express from "express";
import dotenv from "dotenv";

dotenv.config();
import mongoose from "mongoose";
import fileRouter from "./routes/file-routes.js";
 import cors from "cors"
const DB_URL = process.env.DB_URL;
const app = express();
app.use(express.json());
app.use(cors);
app.use("/", fileRouter);
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
