const bookServices = require('../services/bookServices')

const getAllBooks = (req,res) =>{
    res.send(bookServices.getAllBooks())
}

module.exports={
    getAllBooks
}