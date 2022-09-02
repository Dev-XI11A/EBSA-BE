const bookServices = require('../services/bookServices')

const getAllBooks = (req,res) =>{
    res.send(bookServices.getAllBooks())
}

const addBook = (req,res) =>{
    res.send(bookServices.addBook(req))
}

module.exports={
    getAllBooks,
    addBook
}