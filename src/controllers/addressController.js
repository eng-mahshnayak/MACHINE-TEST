let AddressModel = require('../models/addressModel')
let UserModel  = require('../models/userModel')

const addAddress  = async function (req,res,next) {
    try{

        const {houseNo,city,pincode,state,stateCode,country} = req.body

        let Obj = new AddressModel({
            houseNo,city,pincode,state,stateCode,country
        })

        let saveAddress = await Obj.save()

        let userData = UserModel.findOne({_id:req.user._id})

        if(userData.address===undefined) {

            userData.address = []

            userData.address.push(saveAddress._id)

        }else{

            userData.address.push(saveAddress._id)
        }

        await UserModel.findByIdAndUpdate(userData._id,{$set:userData},{new:true})

        res.json({
            status:"SUCCESS",
            statusCode:400,
            error:null ,
            data:Obj   
        })

    }catch(err) {
        res.json({
            status:"ERROR",
            statusCode:400,
            error:err.message ,
            data:null   
        })
    }
}

const getAddress  = async function (req,res,next) {
    try{

       let books = await AddressModel.find()

        if(books.length) {
            res.json({
                status:"SUCCESS",
                statusCode:400,
                error:null ,
                data:books   
            })
        }else{
            res.json({
                status:"ERROR",
                statusCode:400,
                error:'Address is empty' ,
                data:null   
            })
        }
    }catch(err) {
        res.json({
            status:"ERROR",
            statusCode:400,
            error:err.message ,
            data:null   
        })
    }
}

const getOneAddress  = async function (req,res,next) {
    try{

        let id = req.params.id

          if(!id) {

            res.json({
                status:"ERROR",
                statusCode:400,
                error:'id is required' ,
                data:null   
            })

          }
    
          let bookObj = await AddressModel.findById(id)

           if(bookObj) {
            res.json({
                status:"SUCCESS",
                statusCode:400,
                error:null ,
                data:bookObj   
            })
           }else{
            res.json({
                status:"ERROR",
                statusCode:400,
                error:'Address is not found with given id !' ,
                data:null   
            })
           }
    }catch(err) {
        res.json({
            status:"ERROR",
            statusCode:400,
            error:err.message ,
            data:null   
        })
    }
}

const deleteOneAddress = async function (req,res,next) {
    try{

        let id = req.params.id

          if(!id) {

            res.json({
                status:"ERROR",
                statusCode:400,
                error:'id is required' ,
                data:null   
            })

          }
    
          let bookObj = await AddressModel.findByIdAndDelete(id)

           if(bookObj) {
            res.json({
                status:"SUCCESS",
                statusCode:400,
                error:null ,
                data:bookObj   
            })
           }else{
            res.json({
                status:"ERROR",
                statusCode:400,
                error:'Address is not found with given id !' ,
                data:null   
            })
           }
    }catch(err) {
        res.json({
            status:"ERROR",
            statusCode:400,
            error:err.message ,
            data:null   
        })
    }
}

const updateOneAddress  = async function (req,res,next) {
    try{
          
    
          let bookObj = await AddressModel.findByIdAndUpdate(req.body._id,{$set:req.body},{new:true})

           if(bookObj) {
            res.json({
                status:"SUCCESS",
                statusCode:400,
                error:null ,
                data:bookObj   
            })
           }else{
            res.json({
                status:"ERROR",
                statusCode:400,
                error:'Address is not found with given id !' ,
                data:null   
            })
           }
    }catch(err) {
        res.json({
            status:"ERROR",
            statusCode:400,
            error:err.message ,
            data:null   
        })
    }
}

module.exports = {addAddress,getAddress,getOneAddress,deleteOneAddress,updateOneAddress}

