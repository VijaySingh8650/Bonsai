const mongoose = require("mongoose");

//let localurl ="mongodb://127.0.0.1:27017/hellobonsai"
function connect() {
    let url = `mongodb+srv://vijay:12345@cluster0.ggexotb.mongodb.net/hellobonsai`;
    return mongoose.connect(url);
}

module.exports = connect;