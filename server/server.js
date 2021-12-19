const express =require('express');
const bodyParser = require('body-parser');
const app=express();
const port = process.env.PORT ||5000;
const db=require('./config/db');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const test = require('./test');
const user_inform = require('./router/user_inform');
app.use('/api',test);
app.use('/api/user_inform',user_inform);
app.get('/api/products', (req, res) => {
     db.query("SELECT * FROM persons", (err, data) => {
         if(!err) res.send({  data });
         else res.send(err);
     })
 })
app.listen(port,()=>console.log(`listening on ${port}`));



