require('dotenv').config()
require('./databases/mongoConnection')
require('./script/addAdminCredential')
const epxress = require('express')
const userRoute = require('./routers/userRoute')
const adminRoute = require('./routers/adminRoute')
const bookRoute = require('./routers/bookRoute')

const app = epxress()


app.use(epxress.json())

app.use('/',userRoute)
app.use('/',adminRoute)
app.use('/',bookRoute)

app.listen(process.env.PORT,function (err) {
     if(!err) {
        console.log(`express server is listen port ${process.env.PORT}`);
        
     }else{
        console.log('express server is giving error : ',err.message);
        
     }
})

