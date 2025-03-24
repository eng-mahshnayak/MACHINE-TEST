
const generareUserName = async function (length= 8) {

    let userName = ''
    
    let characters = 'abcdefghijklmnopqrstuxyzABCDEFGHIJKLNMOPQRSTUXYZ'

    for (let index = 1; index <= length; index++) {
       
        let randomNum = Math.floor(Math.random()*characters.length)

        userName += characters.charAt(randomNum)
    }

    return userName

}

const generateFourRandomNum =  async function () {

   return Math.floor(1000*Math.random()+9000)
}






module.exports = {generareUserName,generateFourRandomNum}