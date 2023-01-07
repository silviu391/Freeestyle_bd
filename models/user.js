const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

var model = mongoose.model('users', userSchema);

module.exports = model;