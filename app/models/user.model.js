
//Load the module dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define a new 'userSchema'
var userSchema = new Schema({
    user_id : {type:Number , unique: true, index: 1},
    likes: [String],
    blocked: [String]
},{collection: 'users'});

// Create the 'User' model out of the 'userSchema'
mongoose.model('User',userSchema);