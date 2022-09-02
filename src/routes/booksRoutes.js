const router = require('express').Router()
const bookController = require('../controller/bookController')

router.get('/getAllBooks',bookController.getAllBooks)
router.post('/addBook',bookController.addBook)

module.exports=router