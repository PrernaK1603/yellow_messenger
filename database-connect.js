const mongoose=require("mongoose");

mongoose.connect('mongodb://localhost:27017/chat', {useNewUrlParser: true},function(error,data){
    if(error){
        console.log("unable to connect with database");
    }else{
        console.log("database is conneccted with port number 27017");
    }
});