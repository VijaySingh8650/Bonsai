const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    userId: { type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
    projectName: { type: String, required: true},
    currency: { type: String, required:true},
    ratePerHour : {type:Number,default:100},
    clientName : {type:String,required:true},
    status:{type:Boolean,default:false},
    startDate:{type:String},
    Due:{type:Number},
    Paid:{type:Number}
    
})

const Project = mongoose.model("project", projectSchema);
module.exports = Project;