const { addUser,verifyUserOTP,loginUser } = require("../controllers/userController")

let express = require ('express')
const upload = require("../multer/fileUpload")

let route  = express.Router()

route.route('/add/user').post(upload.single("image"), addUser)
route.route('/verify/user').post( verifyUserOTP)
route.route('/login/user').post( loginUser)




module.exports = route