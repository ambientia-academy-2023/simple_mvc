const express = require('express');
const app = express();
const port = 3000;
const bookRouter=require('./controllers/book');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/book',bookRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


module.exports =app;