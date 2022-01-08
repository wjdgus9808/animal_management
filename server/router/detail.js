const axios = require("axios");
const cheerio = require("cheerio");
const { response } = require("express");
const express =require('express');
var fs = require('fs');
const db=require('../config/db');
const router = express.Router();

router.post('/',(req,res)=>{
    const user_id = req.query.user_id
    db.query("SELECT * FROM crawldata WHERE id=?",user_id,(err,data)=>{
        if(!err){ res.send({data})
    
                  }
        else {res.send(err)};
        
    })
  })
  
  module.exports = router;