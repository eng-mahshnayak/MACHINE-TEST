let jwt = require('jsonwebtoken')

const verifyAdminToken = async function (req,res,next) {

    try{

        let token  = req.headers.authorization.replace('Bearer ',"")

        let decodeTokenData = jwt.decode(token,process.env.JWT_SECRET)

         if(decodeTokenData.role==='admin') {
              req.user = decodeTokenData
              next()
         }else{
            res.json({
                status:"ERROR",
                statusCode:400,
                error:'only admin use this routes' ,
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

module.exports = {verifyAdminToken}