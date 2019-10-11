var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    username: String,
    avatar: String,
    gender: String,
    description: String
})

module.exports = mongoose.model('user', userSchema)