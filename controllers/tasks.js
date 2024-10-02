const router = require("../routes/tasks");

const getAllTask=(req,res)=>{
    res.send("get All Task");
};

const createTask=(req,res)=>{
    res.send("create Task");
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