const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path:'./.env'});


const app = express();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST, // if we have a server we put the ip of the server which we are running on
    user: process.env.DATABASE_USER ,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

//const publicDirectory = path.join(__dirname , './public'); // gives us access to current directory
//app.use(express.static(publicDirectory)); // allow the server to use the public direcory which is the css files we have


app.use(express.urlencoded({ extended: false})); // ensures we can grab the data send from any HTML form
app.use(express.json()); // ensure the value grabed from HTML forms is in json format


//app.set('view engine' , 'hbs'); // handle bars for rendering html templates


db.connect((error) =>{
    if(error){
        console.log(error);
    }else{
        console.log("database is connected");
    }
});

// define our route to get access to our pages
app.use('/', require('./routes/pages'));
// define a user path for the different users
app.use('/user' , require('./routes/userRoutes'));


app.listen(4000, ()=>{
    console.log("Server has started on port 4000");
});