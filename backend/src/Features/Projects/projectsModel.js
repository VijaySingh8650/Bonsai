const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    userId: { type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
    projectName: { type: String, required: true},
    currency: { type: Number, required:true, min:40},
    clientName : {type:String,required:true},
    status:{type:Boolean,default:false}
    
})

const Project = mongoose.model("project", projectSchema);
module.exports = Project;