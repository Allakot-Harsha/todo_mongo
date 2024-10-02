const express= require("express");
const router = express.Router();
const {getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask,} = require("../controllers/tasks")
    router.route("/").get(getAllTask).post(createTask);
    router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

// router.route("/").get((req,res)=>{
//     res.send("all items");
// });

// router.route("/new").get((req,res)=>{
//     res.send("new items")
// })

module.exports=router;