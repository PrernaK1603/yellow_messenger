var mongoose=require('mongoose');
var DetailSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    p_name:{
       type:String,
       required:true
    },
    quantity:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    hrs:{
        type:Number
    },
    mint:{
        type:Number
    }
});

//model

const models=mongoose.model('details',DetailSchema);
module.exports=models;