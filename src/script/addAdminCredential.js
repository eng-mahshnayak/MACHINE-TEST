let AdminModel = require('../models/userModel');
const {generareUserName} = require('../utills/common');

const addAdminCredential = async function () {
    try{
        let findAdmin = await AdminModel.findOne({})

        if(findAdmin) {
          console.log('admin credential is inserted !');
          
        }else{
  
          let userName = await generareUserName(8)
  
          console.log(userName,'hhy');
          
          let adminObj = new AdminModel({
              name:"mahesh nayak",
              userName:userName,
              email:"m@gmail.com",
              age:27,
              phoneNum:8319312507,
              role:"admin"
          })
  
          await adminObj.save()
          console.log('admin credential is inserted !');
        }

    }catch(err) {
        console.log(err.message);
        
    }
}


 addAdminCredential()