// app.js

const mysql = require('mysql');
const express = require('express');

const con = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "Password1?",
    //database: "Customers"
});

con.connect(function(err){
    if (err)throw err;
    console.log('Connected!');
})

const app = express();

const port = process.env.PORT
//const port = 3000

app.get('/', (req, res) => res.send('Hello Daniel!'));

app.get('/docker', (req, res) => res.send('Hello from docker Dan!'));

app.listen(port, () => console.log(`Example app listening on port ${port}`));