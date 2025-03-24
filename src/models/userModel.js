let mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    userName:{
        type:String,
        required:true,
        unique:true,
        trim:true  
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true,
        trim:true
    },
    phoneNum:{
        type:Number,
        unique:true,
        required:true,
        trim:true
    },
    otp:{
        type:Number,
        default:0
    },
    image:{
        type:String,
        default:''
    },
    role:{
        type:String,
        enum:['admin','user']
    },
    address:Array

})


let UserModel = mongoose.model('users',UserSchema)

module.exports = UserModel