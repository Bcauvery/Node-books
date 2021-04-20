const express = require('express')
const controller = require("../controller")
const router = express.Router()

router.get('/' , (req,res) =>{
    res.send("Welcome to lib")
})

router.get('/books/:code' , (req,res) =>{
    const { code } = req.params
   const data = controller.getOne(code)
   res.send(data)
})

router.get('/books' , (req,res) =>{
   const data = controller.getAll()
   res.send(data)
})

router.delete("/deleteBook/:code", (req, res) => {
    const code = req.params.code;
    const data = controller.deleteBook(code);
    res.send(data);
  });
  
  router.post("/addBook", (req, res) => {
    const newBook = req.body;
    const output = controller.addNewBook(newBook);
    res.send(output);
  });

module.exports = router