const mongoose = require("mongoose");
// const connectionString= "";

const connectDB=(url)=>{
    console.log(url);
    return mongoose.connect(url)

}

module.exports = connectDB;