const { addBook, getOneBook,getBook,deleteBook,deleteOneBook,updateOneBook,searchBook } = require("../controllers/bookController")

let express = require ('express')
const { verifyAdminToken } = require("../middlewares/verifyJwtToken")


let route  = express.Router()

route.route('/create/book').post( verifyAdminToken, addBook)

route.route('/deleteall/book').delete( verifyAdminToken, deleteBook)

route.route('/deleteone/book/:id').delete( verifyAdminToken, deleteOneBook)

route.route('/update/book').put( verifyAdminToken, updateOneBook)

route.route('/get/book').get(  getBook)

route.route('/getbyid/book/:id').get(  getOneBook)

route.route('/search/book').post(searchBook)




module.exports = route