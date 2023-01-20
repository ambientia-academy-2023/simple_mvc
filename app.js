const express = require('express');
const app = express();
const port = 3000;
const bookRouter=require('./controllers/book');

app.get('/example1',
    function(request,response){
        response.send('I am example');
        console.log('I am example');
    }
);
app.use('/book',bookRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


module.exports =app;