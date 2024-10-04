const router = require("../routes/tasks");
const Tasks = require("../models/tasks")

const getAllTask=(req,res)=>{
    res.send("get All Task");
};

const createTask=async (req,res)=>{
    console.log(req.body);
    const task = await Tasks.create(req.body);  
    res.send(task);
};

const getTask =(req,res)=>{
    res.send("get single task");
}

const updateTask=(req,res)=>{
    res.send("update a task");
}

const deleteTask=(req,res)=>{
    res.send("delete a task")
}

module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}