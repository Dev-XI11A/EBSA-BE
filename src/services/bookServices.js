const bookData = require('../docs/books.json')
const bookUtils = require('../utils/booksUtils')
const utils = require('../utils/utils')
const fs = require('fs')
const getAllBooks = ()=>{
    return bookUtils.list('src/docs/books.json')
}

module.exports={
    getAllBooks
}