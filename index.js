const express = require('express')
const mysql = require('mysql')

//create connection 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
});

//connect to MySQL 
db.connect(err =>{
    if (err){
        throw err;
    }
    console.log('MySQL Connected');
});

const app = express();

//Create Database
app.get('/createdb', (req,res) =>{
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err) =>{
        if(err){
            throw err;
        }
        res.send('Database Created');
    });
    
});

//create a table 
app.get('/createemployee', (req, res) =>{
    let sql = "CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))";
    db.query(sql, (err) =>{
        if (err){
            throw err;
        }
        res.send('Employee table created')
    });
});

app.listen('3000', () =>{
    console.log('Server started on port 3000');
});