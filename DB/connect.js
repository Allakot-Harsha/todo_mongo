const mongoose = require("mongoose");
// const connectionString= "";

const connectDB=(url)=>{
    console.log(url);
    return mongoose.connect("mongodb+srv://harshamohan023:kkHVJRtql3WX009W@cluster0.tgeeb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
   
    

}

module.exports = connectDB;