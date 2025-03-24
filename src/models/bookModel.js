let mongoose = require('mongoose')

let BookSchema = new mongoose.Schema({
    
    bookName:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    autherName:{
        type:String,
        required:true,
        trim:true  
    },
    price:{
        type:Number,
        required:true,
        trim:true
    },
    distription:{
        type:String,
        default:''
    },
   quantity:{
    type:Number,
    required:true,
    default:0
   }

})


let BookModel = mongoose.model('books',BookSchema)

module.exports = BookModel