let UserModel  = require('../models/userModel')
let jwt = require('jsonwebtoken')
const {generareUserName, generateFourRandomNum} = require('../utills/common');


const addUser  = async function (req,res,next) {
    try{

        let image = ''

        const {name,email,age,phoneNum} = req.body

         if(req.file) {
            
            image = `http://localhost:9090/${req.file.originalname}`
             
         }
        
          if(!name||!email||!age||!phoneNum) {

            res.json({
                status:"ERROR",
                statusCode:400,
                error:'all fields are required' ,
                data:null   
            })

          }
 
        let userName = await generareUserName(8)
    
        let otp= await generateFourRandomNum(4)
    
        let userObj = new UserModel({
            name:name,
            userName:userName,
            email:email,
            age:age,
            otp:otp,
            phoneNum:phoneNum,
            role:"user",
            image:image
        })
    
        await userObj.save()

        res.json({
            status:"SUCCESS",
            statusCode:400,
            error:null ,
            data:{
                otp,email 
            }   
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

const verifyUserOTP  = async function (req,res,next) {
    try{

        const {otp} = req.body

          if(!otp) {

            res.json({
                status:"ERROR",
                statusCode:400,
                error:'opt is required' ,
                data:null   
            })

          }
 
       
          let userData = await UserModel.findOne({otp:otp})

           if(userData) {

            let token = jwt.sign({_id:userData._id,role:userData.role,email:userData.email},process.env.JWT_SECRET,{expiresIn:'5h'})

            res.json({
                status:"SUCCESS",
                statusCode:400,
                error:null ,
                message:"login user",
                data:userData,
                token:token
            })
    
           }else{
            res.json({
                status:"ERROR",
                statusCode:400,
                error:'invalid otp' ,
                data:null   
            })

           }
    }catch(err) {
      
    }
}

const loginUser  = async function (req,res,next) {
    try{

        const {phoneNum} = req.body

          if(!phoneNum) {

            res.json({
                status:"ERROR",
                statusCode:400,
                error:'phoneNumber is required' ,
                data:null   
            })

          }
 
       
          let userData = await UserModel.findOne({phoneNum:phoneNum})

           if(userData) {

            let otp = await generateFourRandomNum(4)

            userData.otp = otp

            await UserModel.findByIdAndUpdate(userData._id,{$set:userData},{new:true})

            res.json({
                status:"SUCCESS",
                statusCode:400,
                error:null ,
                message:"one time password",
                data:otp,
            })
    
           }else{
            res.json({
                status:"ERROR",
                statusCode:400,
                error:'invalid number' ,
                data:null   
            })

           }
    }catch(err) {
      
    }
}


module.exports = {addUser,verifyUserOTP,loginUser}