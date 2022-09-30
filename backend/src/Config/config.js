const mongoose = require("mongoose");

//let localurl ="mongodb://127.0.0.1:27017/hellobonsai"
function connect(url) {
    return mongoose.connect(url);
}

module.exports = connect;