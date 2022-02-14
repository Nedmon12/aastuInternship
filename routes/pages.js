const express = require('express');
const router = express.Router();
const wareHouseController = require('../controllers/warehouse')
const purchaseController = require('../controllers/purchase')
const multer = require('multer')
const upload = multer({dest: "../uploads"})

router.get("/" , (req,res)=>{
    //res.render("index");
    //TO DO 
});

router.get("/postRequest" , (req, res) => {
    //TO DO
})

router.post('/submitRequest', upload.fields([{name : 'purchaseInterest' },{name :'letterTechCommittee'} , {name : 'letterAward' }, {name : 'approvedPaper'}, {name : 'uniAgreement'}]),purchaseController.submitRequest)




//------------------------------------------
//------------------------------------------
//warehouse employee dashboard and requestForm validation
router.get("/dashboard", )

router.get("/requests/:requestId", wareHouseController.formValidate )
router.get("/requests/handleForm", wareHouseController.handleForm)
//-------------------------------------------
//-------------------------------------------





module.exports = router;