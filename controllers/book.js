const express=require('express');
const controller=express.Router();
const book=require('../models/book_model');

controller.get('/',
    function(request, response){
        let data=book.getAllBooks();
        response.json(data);
    }
);

controller.get('/:id',
    function(request, response){
        let id=request.params.id;
        let data=book.getOneBook(id);
        response.json(data);
    }
);

controller.post('/',
    function(request,response){
        let data=book.addBook(request.body);
        response.json(data);
    }
);

controller.put('/:id',
    function(request,response){
        let data=book.updateBook(request.params.id,request.body);
        response.json(data);
    }
);

controller.delete('/:id',
    function(request,response){
        let data=book.deleteBook(request.params.id);
        response.json(data);
    }
);



module.exports=controller;