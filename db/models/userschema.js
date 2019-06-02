const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    googleId:String,
    username:String,
    picture:String,
    email:String
});
const userModel = mongoose.model('users',userSchema);

module.exports = userModel;
