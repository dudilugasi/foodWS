// Load the module dependencies
var mongoose = require('mongoose');


module.exports = function() {
    //Connect to mongoDB
    var db = mongoose.connect('mongodb://dudi:lugasi@ds045252.mongolab.com:45252/food');

    //Load the application models
    require('../app/models/user.model');
    require('../app/models/recipe.model');
    require('../app/models/ingredient.model');

    //Return the Mongoose connection instance
    return db;
};