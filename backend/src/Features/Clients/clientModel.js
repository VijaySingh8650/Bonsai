const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    userId: { type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
    email: { type: String,required:true},
    name: { type: String, required: true },
    contactName:{type:String},
    phoneNumber:{type:Number},
    website:{type:String},
    companyAddress:{type:String},
    
})

const Client = mongoose.model("client", clientSchema);
module.exports = Client;