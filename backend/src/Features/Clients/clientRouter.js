const express = require("express");
const Client = require("./clientModel");
const User = require("../Users/userModel");

const app = express.Router();

// const authMiddleWare = async (req, res, next) => {
    
//     let token = req.headers.token;
//     console.log(token);

//     try {
//         if (token) {
//             const [ id, email, name ] = token.split(":");
//         let checkUser = await User.findById(id);
//         // console.log(checkUser, email,id,name);
//         if (checkUser.email===email && checkUser.name===name){
//             userId = id;
//             console.log(id);
//             return next();
//         } else {
//             return res.status(401).send("can not perform this operation");
//         }
//         }
//          else {
//             return res.status(401).send("can not perform this operation");
//         }
        
        
//     }
//     catch (e) {
//         res.status(500).send(e.message);
//     }
// }

// app.use(authMiddleWare);

//get the clients
app.get("/", async (req, res) => {
    const userId = req.headers.token
    try {
        
        const clients = await Client.find({ userId: userId });
        if (clients) return res.send(clients);
        else {
            return res.send("Nothing is there yet");
        }
    }
    catch (e) {
        res.status(500).send(e.message);
    }
    
})

app.get("/:id", async (req, res) => {
    let { id } = req.params;
    try {
        
        const clients = await Client.findById({_id:id});
        res.send(clients);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
    
})


app.post("/", async(req, res)=>{
    let userId = req.headers.token;
    try {
        let newClient = await Client.create({userId,...req.body});
        console.log(newClient);
        return res.status(201).send({
            token:`${newClient._id}:${newClient.email}`
        });
    }
    catch (e) {
        res.status(500).send(e.message);
    }
})

app.delete("/:id", async(req, res)=>{
   
    let { id } = req.params;
    
    try {
        
        let data = await Client.findByIdAndRemove(id,{new:true});
        console.log(data);
        return res.send(data);
        
    }
    catch (e) {
       res.status(500).send(e.message); 
    }
})

app.patch("/:id", async (req, res) => {
    let { id } = req.params;
    try {
       
            let updated = await Client.findByIdAndUpdate(id,req.body,{new:true})
            return res.send(updated);
    }
    catch (e) {
       res.status(500).send(e.message); 
    }
})





module.exports = app;


