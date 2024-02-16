import mongoose from "mongoose";
import { Schema } from "mongoose";
const fileSchema=new Schema({
       path:{
         type:String,
         required:true
       },
       name:{
         type:String,
         required:true
       },
       downloadCount:{
         type:Number,
         required:true
       }
})
const File=mongoose.model("File",fileSchema);
 export default File;