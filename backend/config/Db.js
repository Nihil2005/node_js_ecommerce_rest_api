const moongoose = require('mongoose');
const connectDb = ()=>{

    moongoose.connect(process.env.MONGO_URL).then((data)=>{
        console.log(`mongodb connected with server ${data.connection.host}`);
    })

}


module.exports = connectDb;