const express=require('express');
const controller=express.Router();

controller.get('/',
    function(request, response){
        response.json('Palauttaa kaikki kirjat');
    }
);

controller.get('/:id',
    function(request, response){
        let id=request.params.id;
        response.json('Palauttaa kirjan jonka id='+id);
    }
);

controller.post('/',
    function(request,response){
        response.json('Lisää uuden kirjan');
    }
);

controller.put('/:id',
    function(request,response){
        let id=request.params.id;
        response.json('Muokkaa kirjan jonka id='+id);
    }
);

controller.delete('/:id',
    function(request,response){
        let id=request.params.id;
        response.json('Poistaa kirjan jonka id='+id);
    }
);



module.exports=controller;