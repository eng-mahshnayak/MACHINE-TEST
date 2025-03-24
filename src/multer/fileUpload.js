let multer = require('multer')

let path  = require('path')


const storage = multer.diskStorage({

    destination: function (req, file, cb) {

      let fileUploadPath = path.join(__dirname,'../../public')  

      console.log(fileUploadPath);
      
      cb(null, fileUploadPath)
    },
    filename: function (req, file, cb) {

      console.log(file);
      
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,  uniqueSuffix + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })


  module.exports = upload