const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema({
    userId: { type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
    taskName: { type: String, required: true},
    projectName:{type:String,required:true},
    clientName:{type:String,required:true},
    status:{type:Boolean,default:false},
    dueDate:{type:String}
    
})

const Tasks = mongoose.model("task", TasksSchema);
module.exports = Tasks;