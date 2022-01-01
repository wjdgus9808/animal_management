const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors");
const db=require('../config/db');
const router= express.Router();

router.use(cors());
router.use(fileupload());
router.use(express.static("files"));

router.post("/", (req, res) => {
  const newpath = __dirname + "/capture_image/";
  const file = req.files.file;
  const filename = "capture_img.jpg";
  sql1="INSERT INTO captureimage (name,place,place2,kind) VALUES(?,?,?,?)";
  val1=[filename,"none","none","none"]
  db.query(sql1,val1,(err,data)=>{
    
  })
  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      res.status(500).send({ message: "File upload failed", code: 200 });
    }
    console.log("uploaded");
    res.status(200).send({ message: "File Uploaded", code: 200 });
  });
});
module.exports = router;