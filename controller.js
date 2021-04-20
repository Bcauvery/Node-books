const bookAdapter = require('./lib/books-adapter')

const getAll = () => {
    const books = bookAdapter.getAll()
    return books
}

const getOne = (code) => {
    const books = bookAdapter.getOne(code)
    return books
}

const deleteBook = (code) => {
    const books = bookAdapter.deleteBook(code)
    return books
}

module.exports = { getAll, getOne , deleteBook}