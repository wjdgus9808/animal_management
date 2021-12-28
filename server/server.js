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
const crawl = require('./router/crawl');



const spawn = require('child_process').spawn;
const result = spawn('python', ['main.py']);
result.stdout.on('data', (result)=>{
  console.log(result.toString());
});

app.use('/api/user_inform',user_inform);
app.use('/api/upload',upload);
app.use('/api/crawl', crawl);


app.listen(port,()=>console.log(`listening on ${port}`));



