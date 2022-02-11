const express = require('express');
const router = express.Router();
const wareHouseController = require('../controllers/warehouse')

router.get("/" , (req,res)=>{
    //res.render("index");
    //TO DO 
});

router.get("/postRequest" , (req, res) => {
    //TO DO
})




//------------------------------------------
//------------------------------------------
//warehouse employee dashboard and requestForm validation
router.get("/dashboard", )

router.get("/requests/:requestId", wareHouseController.formValidate )
router.get("/requests/handleForm", wareHouseController.handleForm)
//-------------------------------------------
//-------------------------------------------





module.exports = router;