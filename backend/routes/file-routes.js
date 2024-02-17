import express from "express";
import { getImage, uploadFile } from "../controllers/file-controllers.js";
import upload from "../utils/upload.js";

const fileRouter = express.Router();

 fileRouter.post("/upload",upload.single('file'),uploadFile)
 fileRouter.get("/file/:fileId",getImage);
 export default fileRouter;
 