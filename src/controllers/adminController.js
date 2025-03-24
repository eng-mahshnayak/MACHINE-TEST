let AdminModel = require('../models/userModel')
let jwt = require('jsonwebtoken')

const adminLogin  = async function (req,res,next) {
    try{

        const {userName,email} = req.body

          if(userName===''||email==='') {

            return res.json({
                status:"ERROR",
                statusCode:400,
                error:'all fields are required' ,
                data:null   
            })

          }

          let adminData = await AdminModel.findOne({email:email,userName:userName})

           if(adminData) {

            let token = jwt.sign({_id:adminData._id,role:adminData.role,email:adminData.email},process.env.JWT_SECRET,{expiresIn:'5h'})

            res.json({
                status:"SUCCESS",
                statusCode:400,
                error:null ,
                data:adminData,
                token:token   
            })

            
           }else{

            res.json({
                status:"ERROR",
                statusCode:400,
                error:'admin not found' ,
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

module.exports = {adminLogin}