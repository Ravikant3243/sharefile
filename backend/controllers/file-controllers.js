
 import File from "../model/File.js"
  export const uploadFile=async(req,res,next)=>{
           
       const fileObj={
       path:req.file.path,
       name:req.file.originalname,
       downloadCount:Number(0)
     };
       try {
          const file=await File.create(fileObj);
          return res.status(200).header('Access-Control-Allow-Origin', 'http://localhost:5173').json({path:`http://localhost:8080/file/${file._id}`});
       } catch (error) {
         return res.status(400).header('Access-Control-Allow-Origin', 'http://localhost:5173').json({message:error.message})
       }
         
  }
  export const getImage=async(req,res,next)=>{
       try {
           const file=await File.findById(req.params.fileId);  
           file.downloadCount++;
           await file.save();
           res.download(file.path,file.name);

       } catch (error) {
          console.log(error);
       }
  }