const express = require('express')
const app = express.Router()
const purchaseController = require('../controllers/purchase')

app.get('/requestBacklog', purchaseController.requestBacklog)
app.post('/submitRequest', upload.multiple('file'),purchaseController.submitRequest)


module.export = app