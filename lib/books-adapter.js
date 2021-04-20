const books= require('../data/books.json')


const getAll = () =>{
    return books
}

const getOne = (code) =>{
    return books.find(book => book.code == code)
}

const deleteBook= (code) => {
    let deleted = books.filter((x) => x.code !== code);
    fs.writeFileSync("./data/books.json", JSON.stringify(deleted, null, 4));
    return deleted;
  };
  
  const addBook = (newBook) => {
    books.push(newBook);
    fs.writeFileSync("./data/books.json", JSON.stringify(books, null, 4));
    return books;
  };
module.exports = { getAll , getOne , deleteBook ,addBook}