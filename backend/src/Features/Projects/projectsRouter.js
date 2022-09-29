const express = require("express");
const Client = require("../Clients/clientModel");
const Project = require("./projectsModel");

const app = express.Router();
let clientId;
const authMiddleWare = async (req, res, next) => {
    
    let token = req.headers.token;
    console.log(token);
    
    try {
        const [id, email] = token.split(":");
        console.log(id);
        let checkUser = await Client.findById(id);
        // console.log(checkUser, email,id,name);
        if (checkUser.email===email){
            clientId = id;
            console.log(id);

            return next();
        }
        return res.status(401).send("can not perform this operation");
    }
    catch (e) {
        res.status(500).send(e.message);
    }
}

app.use(authMiddleWare);

//get the clients
app.get("/", async (req, res) => {
       
    try {
        
        const projects = await Project.find({ clientId: clientId });
        if (projects) {
            
            return res.send(projects);
        }
        return res.status(404).send("Not Found");
    }
    catch (e) {
        res.status(500).send(e.message);
    }
    
})

app.post("/", async(req, res)=>{
    const { projectName, currency } = req.body;
    
    try {
        
            let newProject = await Project.create({ currency, clientId,projectName });
            console.log(newProject);
        return res.status(201).send({
                token:`${newProject._id}:${newProject.projectName}`
            }); 
        

        
    }
    catch (e) {
        res.status(500).send(e.message);
    }
})

app.patch("/:id", async (req, res) => {
    let { id } = req.params;
    try {
        let checkProject = await Project.findOne({ id }); 
        if (checkProject) {
            let updateProject = await Project.updateOne({ ...checkProject }, { $set: { status: !checkProject.status } })
            return res.send(updateProject);
        }
        return res.status(404).send("Project Not Found");
    }
    catch (e) {
       res.status(500).send(e.message); 
    }
})





module.exports = app;


