const axios = require("axios");
const cheerio = require("cheerio");
const { response } = require("express");
const express =require('express');
var fs = require('fs');
const db=require('../config/db');
const router = express.Router();

router.get('/get_crawldata',(req,res)=>{
  db.query("SELECT id,date,img FROM crawldata",(err,data)=>{
      if(!err){ res.send({data}) 
                }
      else {res.send(err)};
      
  })
})

module.exports = router;