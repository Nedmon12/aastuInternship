const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const jwt =  require("jsonwebtoken");
const dotenv = require('dotenv');
const requestModel = require('../model/request')
const multer = require('multer')
const upload = require("../middleware/upload")
dotenv.config({path:'../.env'})

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, '../uploads');
    },
    filename: function (req, file, cb) {
       cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
 })

exports.requestBacklog = (req, res) => {
    //render rejected requests
    //
    
}

exports.submitRequest = async (req, res ) => {
    //form submission handler --- special attention to files
    console.log(req.body)
    try {
        await upload(req, res);
        console.log(req.files);
        //if (req.files.length <= 0) {
          //return res.send(`You must select at least 1 file.`);
        //}
        //return res.send(`Files has been uploaded.`);
        const {purchaseInterest, auctionNumber, requestDate, letterTechCommittee, 
            letterAward, approvedPaper, uniAgreement} = req.body
        var pi_filename = `${__dirname}/../../uploads${Date.now()}-${purchaseInterest.originalname}`
        var ltc_filename = `${__dirname}/../../uploads${Date.now()}-${letterTechCommittee.originalname}`
        var la_filename = `${__dirname}/../../uploads${Date.now()}-${letterAward.originalname}`
        var ap_filename = `${__dirname}/../../uploads${Date.now()}-${approvedPaper.originalname}`
        var ua_filename = `${__dirname}/../../uploads${Date.now()}-${uniAgreement.originalname}`
        try {
            const db = mysql.createConnection({
                host: process.env.DATABASE_HOST, // if we have a server we put the ip of the server which we are running on
                user: process.env.DATABASE_USER ,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE
            })
            db.query('INSERT INTO requests SET ?', {purchase_interest : pi_filename, 
                auction_number: auctionNumber, request_date:requestDate, letter_tech_committee:ltc_filename, 
                letter_award: la_filename,approved_paper: ap_filename, uni_agreement: ua_filename })
        //render the next page here i guess
        res.send(req.body)
        } catch (error) {

        }
      } catch (error) {
        console.log(error);
        if (error.code === "LIMIT_UNEXPECTED_FILE") {
         // return res.send("Too many files to upload.");
        }
        return res.send(`Error when trying upload many files: ${error}`);
      }
}
