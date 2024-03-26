
const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = 5000;

const db = mysql.createPool({
  host:"localhost",
  user:"root",
  password:"",
  database:"huttopia"
})

app.get('/api/get', (req, res) => {
  const request = "SELECT * FROM client"
  db.query(request,(err,result)=>{
    res.send(result)
  })
  
})

app.listen({port})