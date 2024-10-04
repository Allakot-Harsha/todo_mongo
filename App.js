const express = require("express");
const app = express();
const task=require("./routes/tasks")
const port = 5000;
const dotenv = require("dotenv");

const connectDB = require("./DB/connect")
dotenv.config();
// require("dotenv").config();
app.use(express.json());
app.use("/api/v1/tasks",task);
const url = process.env.MONGO_URL;

const start = async() =>{
    try{
        
        await connectDB(url);
        app.listen(port,()=>{
            console.log(`Server is listening at ${port}`);
            
        })

    }
    catch(error){
        console.log(error);
        
    }
};

start();
//app.get('/api/v1/tasks')- get all the tasks
//app.post('/api/v1/tasks')- create a new task
// app.get('/api/v1/tasks/:id')- get a single task
//app.patch('/api/v1/tasks/:id')- update a single task, same as put
//app.delete('/api/v1/tasks/:id')-delete a task