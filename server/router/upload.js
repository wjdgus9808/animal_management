const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors");

const router= express.Router();

router.use(cors());
router.use(fileupload());
router.use(express.static("files"));

router.post("/", (req, res) => {
  const newpath = __dirname + "/capture_image/";
  const file = req.files.file;
  const filename = file.name;

  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      res.status(500).send({ message: "File upload failed", code: 200 });
    }
    console.log("uploaded");
    res.status(200).send({ message: "File Uploaded", code: 200 });
  });
});
module.exports = router;