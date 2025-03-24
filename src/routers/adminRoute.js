const { adminLogin } = require("../controllers/adminController")

let express = require ('express')


let route  = express.Router()

route.route('/admin/login').post( adminLogin)




module.exports = route