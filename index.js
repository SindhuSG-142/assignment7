const express = require("express");
const multer = require("multer");
const PORT =8080;

const server=express();
// server.use(morgan("tiny"));

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, "./uploads");
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname +"-"+ uniqueSuffix);
    },
});
const upload=multer({storage: storage});
server.post("/upload",upload.single("avatar"),function(req,res,next){
    res.status(200).send({message:"file uploaded successfully"});
});
server.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});