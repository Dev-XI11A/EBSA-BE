const router = require('express').Router()
const bookController = require('../controller/bookController')

router.get('/getAllBooks',bookController.getAllBooks)

module.exports=router