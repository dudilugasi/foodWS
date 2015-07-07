// Load the module dependencies
var users = require('../../app/controllers/users.controller');

// Define the user routes module
module.exports = function(app) {

    //Set up the get-user route
    app.get('/get-user',users.getUser);

    //Set up the add-likes route
    app.get('/add-likes',users.putUserLikes);

    //Set up the add-blocked route
    app.get('/add-blocked',users.putUserBlocked);  
};