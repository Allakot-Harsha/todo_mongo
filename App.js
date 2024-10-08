const express = require("express");
const app = express();
const task=require("./routes/tasks")
const port = 5000;
const connectDB = require("./DB/connect")

require("dotenv").config();
app.use(express.json());
app.use("/api/v1/tasks",task);


const start = async() =>{
    try{
        
        await connectDB(process.env.MONGO_URL);
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