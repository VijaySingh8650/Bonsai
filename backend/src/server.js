const express = require("express");
const cors = require("cors");
const userRouter = require("./Features/Users/userRouter");
const clientRouter = require("./Features/Clients/clientRouter");
const projectRouter = require("./Features/Projects/projectsRouter");
const taskRouter = require("./Features/Tasks/tasksRouter");
const dotenv = require("dotenv");
dotenv.config();
const connect = require("./Config/config");

const PORT = process.env.PORT || 6000;
const API = process.env.MONGO_URL || "";;


const app = express();
app.enable("trust proxy");
app.use(cors({
    origin: '*',
    
    credentials:true,
    optionSuccessStatus:200
}));


app.use(express.json());
app.use("/users", userRouter);
app.use("/clients", clientRouter);
app.use("/projects", projectRouter);
app.use("/tasks", taskRouter);
app.listen(PORT, async () => {
    await connect(API);
    console.log("User heat the server!!");
})
