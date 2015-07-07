/**
 * Created by dudi on 07/07/2015.
 */

//Load the module dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    user_id : {type:Number , unique: true, index: 1},
    likes: [String],
    blocked: [String]
},{collection: 'users'});

mongoose.model('User',userSchema);