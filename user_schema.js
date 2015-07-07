var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema({
    user_id : {type:Number , unique: true},
    likes: [String],
    blocked: [String]
},{collection: 'users'});

exports.userSchema = userSchema;