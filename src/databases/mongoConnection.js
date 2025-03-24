let mongoose = require('mongoose')

const getMongodbConnection = async function () {
    
    try {

        await mongoose.connect(process.env.MONGODB_URL)

        console.log('mongodb connection is ready ');
        
    } catch (err) {
        console.log('mongodb connection error: ',err.message);
    }
}

getMongodbConnection()