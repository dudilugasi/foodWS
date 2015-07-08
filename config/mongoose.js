// Load the module dependencies
var mongoose = require('mongoose');

// Define the Mongoose configuration
module.exports = function() {
    //Connect to MongoDB with Mongoose
    var db = mongoose.connect('mongodb://dudi:lugasi@ds045252.mongolab.com:45252/food');

    //Load the application models
    require('../app/models/user.model');
    require('../app/models/recipe.model');

    //Return the Mongoose connection instance
    return db;
};