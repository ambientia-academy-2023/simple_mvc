const express = require('express');
const app = express();
const bookRouter=require('./controllers/book');

if(process.env.PORT != undefined){
  port=process.env.PORT;
}
else {
  port='3000';
}

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/book',bookRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


module.exports =app;