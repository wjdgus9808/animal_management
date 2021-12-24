const express =require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const app=express();
const port = process.env.PORT ||5000;
const db=require('./config/db');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const user_inform = require('./router/user_inform');
const upload = require('./router/upload');
app.use('/api/user_inform',user_inform);
app.use('/api/upload',upload);

app.get('/api/crawl',(req,res)=>{
    db.query("SELECT id,date,img FROM crawldata",(err,data)=>{
        if(!err) res.send({data});
        else res.send(err);
        
    })
})
app.get('/api/products', (req, res) => {
     db.query("SELECT * FROM persons", (err, data) => {
         if(!err) res.send({  data });
         else res.send(err);
        
     })
 })
app.listen(port,()=>console.log(`listening on ${port}`));



