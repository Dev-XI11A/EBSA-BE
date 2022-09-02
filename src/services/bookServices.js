const bookUtils = require('../utils/booksUtils')

const getAllBooks = ()=>{
    return bookUtils.list('src/docs/books.json')
}

const addBook =(req)=>{
    let body = req.body
    return bookUtils.add('src/docs/books.json',body)
}

module.exports={
    getAllBooks,
    addBook
}