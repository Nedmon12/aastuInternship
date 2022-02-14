const mysql = require("mysql")
const bcrypt = require("bcryptjs")
const jwt =  require("jsonwebtoken")
const dotenv = require('dotenv')
dotenv.config({path:'../.env'})

exports.authenticateLogin = (req, res) => {
    try {
        const db = mysql.createConnection({
            host: process.env.DATABASE_HOST, // if we have a server we put the ip of the server which we are running on
            user: process.env.DATABASE_USER ,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE
        })
    
        const {username, password} = req.body
        db.query("SELECT * FROM users WHERE username=?", [username] , async(error, results)=>{
            try{
                // console.log(results);
                // console.log(results[0].role);
    
                if(results.length == 0){
                  //if account doesn't exist
                }
                else if(!await bcrypt.compare(password , results[0].password)){
                    //if password is invalid
                }else{
                    // authenticated -- but what kind of a user? hmmmm                    
                }
            }catch(error){
                console.log(error);
            };
        })
    } catch (error) {
        console.log(error)
    }
 
    
}

exports.signUp = (req,res) => {
    const db = mysql.createConnection({
        host: process.env.DATABASE_HOST, // if we have a server we put the ip of the server which we are running on
        user: process.env.DATABASE_USER ,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE
    })

    const {username, password} = req.body
    db.query("SELECT email FROM  users WHERE email=?", [email], async(error, results)=>{
        if(error){
            console.log(error);
        }
        else if(results.length >0){
            return res.render('register',{email_message: 'Email already in use'});
        }
        else if(!/.{3,}$/.test(enterpreneur_fullName)){
                     return res.render('register' , {Enterp_fullName_message: 'Enterpreneur Name is Invalid'});
        }
       else if(!/((^(\+251|0)\d{3})-?\d{6})/im.test(phone_number)){
            return res.render('register', {phone_number_message: 'Invalid phone number'});
       }
       else if(!/.{2,}$/.test(business_name)){
           return res.render('register', {business_name_message: 'Business Name invalid'});
       }
       else if(!description.length > 10){
           return res.render('register', {description_message: 'Description too short, please enter more information'})
       }
       else if(!business_description.length > 10){
           return res.render('register', {business_description_message: 'Business Description too short, please enter more information'});
       }
       else if(!business_solution.length > 10){
            return res.render('register', {business_solution_message: 'Business solution Description is too short, please enter more information'});
       }
       else if(!business_support.length > 10){
            return res.render('regiter', {business_support_message: 'Business support Description is too short, please enter more information'});
       }
       else{
           res.render('index');
       }

       db.query('INSERT INTO new_registers SET?' , {enterpreneur_name:enterpreneur_fullName,email:email,phone_number:phone_number,business_name:business_name,
                                                    business_address:business_address,business_partener1:business_partener[0],business_partener2:business_partener[1], business_partener3:business_partener[2],
                                                    description:description,business_description:business_description,business_solution:business_solution,business_support:business_support,business_stage:business_stage}, (err,results)=>{

        if(err){
            console.log(err);
        }
        else{
            console.log("recorded");            
        }      
        
        });
       
    })
}