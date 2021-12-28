const axios = require("axios");
const cheerio = require("cheerio");
const { response } = require("express");
const express =require('express');
var fs = require('fs');
const db=require('../config/db');
const router = express.Router();
//public/images폴더에 크롤링이미지 저장

router.get('/get_crawldata',(req,res)=>{
  db.query("SELECT id,date,img FROM crawldata_test",(err,data)=>{
      if(!err){ res.send({data}) 
                }
      else {res.send(err)};
      
  })
})

module.exports = router;