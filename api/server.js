 const express = require ('express');
 const app = express();
 const mysql = require('mysql2');
 const dotenv = require('dotenv');
 const cors = require('cors');
 const bcrypt = require('bcrypt');

 app.use(express.json());
 app.use(cors());
 dotenv.config()

 // connecting to database
 const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
 })

 //to test server
 db.connect((err) => {
    //if connection doesnt work
    if (err) return console.log("Error While Connecting to MYSQL")
    //when connection works
    console.log("connected to MYSQL as id:", db.threadid);
    
    // create database db
    db.query('CREATE DATABASE IF NOT EXISTS expense_tracker', (err, result) => {
      //error creating db
      if (err) return console.log ("error while creating database")
         // if no error creating database
      console.log("db expense_tracker created/ checked sucessfully");

      //select expense_tracker db
      changeuser ({database:'expense_tracker'}, (err, result) => {
         //if erooor changing
         if (err) return console.log("error selecting db")
            // if no error
         console.log("expense_tracker is currently in use");

         //creating table
         const createUsersTable = `
         CREATE TABLE IF NOT EXISTS users(
         id INT AUTO_INCREMENT PRIMARY KEY,
         email VARCHAR(100) NOT NULL UNIQUE,
         user name VARCHAR (50) NOT NULL,
         password VARCHAR(100) NOT NULL
         )
         `;
         db.query(createUsersTable, (err, result) => {
            //if error creating table
          if (err) return console.log("error in creating table")
//if no error
          console.log("users table is created sucessfully")
         })
      })
    })
 })
 //running server
 app.listen(3000, () => {
    console.log("Server Running on PORT 3000")
 })


 


 


