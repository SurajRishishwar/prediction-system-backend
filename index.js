const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const port=8000||process.env.port;
const app = express();
const mysql=require("mysql");
 
app.use(cors());
// parse application/json
app.use(bodyParser.json());
  
//create database connection
const mysqlconnection = mysql.createPool({

    
    host : "sql.freedb.tech",   
    port : 3306,
    database : "freedb_patients",
    user : "freedb_suraj-admin",
    password : "&RW5uB3V7x6FngV",
    connectionLimit: 20,
    multipleStatements:true
});
mysqlconnection.getConnection((err)=>{
    if(err){
        console.log('Not Connected',err);
    }
    else{
        console.log('ho gya hogya');
    }
});

app.post('/store-data',(req, res) => {

    let data = {case_person: req.body.case_person,case_email: req.body.case_email};
    let sql = "INSERT INTO patients_details SET ?";
    let query = mysqlconnection.query(sql, data,(err, results) => {
      if(err) console.log(err);
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

app.listen(port, () => {
    console.log("Server running successfully on 8000");
});
   
