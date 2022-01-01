var mysql=require('mysql');
const db=mysql.createPool({
    host:'localhost',
    user : 'root',
    password : '9972486',
    database : 'test'
});

module.exports = db;