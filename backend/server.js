
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');


const app = express();



app.use(cors());



app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "chutttt"]});
});


app.listen(5000, () => {
    console.log("Listening on port 5000");
});


