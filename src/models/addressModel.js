let mongoose = require('mongoose')

let AddressSchema = new mongoose.Schema({

    houseNo:{
        type:String,
        required:true,
        trim:true
    },
    city:{
        type:String,
        required:true,
        trim:true  
    },
    pincode:{
        type:Number,
        required:true,
        trim:true
    },
    state:{
        type:String,
        required:true,
        trim:true
    },
    stateCode:{
        type:Number,
        unique:true,
        required:true,
        trim:true
    },
    country:{
        type:String,
    },
})


let AddressModel = mongoose.model('address',AddressSchema)

module.exports = AddressModel