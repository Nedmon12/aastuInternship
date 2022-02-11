const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const jwt =  require("jsonwebtoken");
const dotenv = require('dotenv');
const requestModel = require('../model/request')
dotenv.config({path:'../.env'})

exports.warehouseLogin = (req, res) =>{
    //TO DO warehouse authentication
    try {
        const db = mysql.connect ( {
            host: process.env.DATABASE_HOST, // if we have a server we put the ip of the server which we are running on
            user: process.env.DATABASE_USER ,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE
        })
        const {username, password} = req.body
        db.query("SELECT * FROM warehouse WHERE email=?", [username] , async(error, results)=>{
            try{
                // console.log(results);
                // console.log(results[0].role);

                if(results.length == 0){
                   //todo
                }
                else if(!await bcrypt.compare(password , results[0].password)){
                    //todo password not correct
                }else{
                    //todo authenticate user --- forward to /dashboard     
                }
            }catch(error){
                console.log(error);
            };
        });
    }
    catch(error) {
        console.log(error);
    }
    

}
exports.new_requests = (req, res) => {
    const db = mysql.createConnection({
        host: process.env.DATABASE_HOST, // if we have a server we put the ip of the server which we are running on
        user: process.env.DATABASE_USER ,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE
    });
    
    db.query("SELECT * FROM new_requests" , (error, results)=>{ 
   
         
        var allData = [];
        
         // loop through the results of db to store in array to push to json file
        for(var i=0;i<results.length; i++){
            var {id,enterpreneur_name,email,phone_number,business_name,business_address,business_partener1,business_partener2,business_partener3,description,business_description,business_solution,business_support,business_stage} = results[i]; //edit the variable names
            var items = {itemName : itemType}; //todo items = full database information
              
            allData.push(items);
            // obj.dataArray.push(items);           
        }
        console.log(allData);    
        
        //res.render('tableview' , {requests: results });---- another react component? if no react provided continue with ejs    
    });  
}
    exports.formValidate = (req, res) => {
       const requestId = req.param.requestId
        // find the corresponding request from the database using requestId
        //render single form page
        //react component ---- or send every request parameter for an ejs to render
        //handleForms ejs
        //request acceptance form 
    }
    exports.handleForm = (req, res) => {
        const form = {} = req.body //edit the variables
        //react component --- or update info of request discard request (a recycle bin preferablly)
        //render dashboard/new_requests regardless
    }