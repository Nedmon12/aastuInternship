const express = require('express')
const router = express.Router()
const userController = require('../controllers/usercontroller')


router.get('/login', userController.authenticateLogin)
router.get('/signUp', userController.signUp)

module.exports = router