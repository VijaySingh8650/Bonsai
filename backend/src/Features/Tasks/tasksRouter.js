const express = require("express");
const Tasks = require("./tasksModel");
const Project = require("../Projects/projectsModel");

const app = express.Router();
// let projectId;
// const authMiddleWare = async (req, res, next) => {
    
//     let Token = req.headers.token;

//     try {
//         const [ id, projectName] = Token.split(":");
//         let checkProject = await Project.findById(id);
//         // console.log(checkUser, email,id,name);
//         if (checkProject.projectName===projectName){
//             projectId = id;
            
//             return next();
//         }
//         return res.status(401).send("can not perform this operation");
//     }
//     catch (e) {
//         res.status(500).send(e.message);
//     }
// }

// app.use(authMiddleWare);

//get the clients
app.get("/", async (req, res) => {
    const userId = req.headers.token;
    try {
        
        const tasks = await Tasks.find({ userId: userId });
        res.send(tasks);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
    
})

app.post("/", async(req, res)=>{
    const userId = req.headers.token;
    try {
        
            let newTasks = await Tasks.create({...req.body,userId});
            console.log(newTasks);
            res.status(201).send("Addedd Successfully");
        
        
    }
    catch (e) {
        res.status(500).send(e.message);
    }
})

app.patch("/:id", async (req, res) => {
    let { id } = req.params;
    
    
    try {
 
            let updated = await Tasks.findByIdAndUpdate(id,req.body,{new:true})
            return res.send(updated);
       
    }
    catch (e) {
       res.status(500).send(e.message); 
    }
})

app.delete("/:id", async (req, res) => {
    let { id } = req.params;
    
    try {
        
        let data = await Tasks.findByIdAndRemove(id,{new:true});
        console.log(data);
        return res.send(data);
        
    }
    catch (e) {
       res.status(500).send(e.message); 
    }
})





module.exports = app;


