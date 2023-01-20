const bookArray=[
    {name:"Java", author:"Teppo Testi", isbn:"12-34-56"},
    {name:"C++", author:"Liisa Virta", isbn:"22-34-55"},
    {name:"JavaScript", author:"Matti Joki", isbn:"99-34-56"}
];

const book={
    getAllBooks:function(){
        return bookArray;
    },
    getOneBook:function(id){
        return bookArray[id];
    },
    addBook:function(addData){
        let sql="insert into book values("+addData.name+","+addData.author+","+addData.isbn+")";
        return sql;
    },
    updateBook:function(id,updateData){
        let sql="update book set name="+updateData.name+", author="+updateData.author+", isbn="+updateData.isbn+" where id="+id+")";
        return sql;
    },
    deleteBook:function(id){
        let sql="delete book  where id="+id;
        return sql;
    }
}

module.exports=book;