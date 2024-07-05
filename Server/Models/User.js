const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    continent: {type: String, require: true},
    country: {type: String, require: true},
    language: {type: String, require: true}

})


const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel;