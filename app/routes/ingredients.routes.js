// Load the module dependencies
var ingredients = require('../../app/controllers/ingredients.controller');

// Define the recipes routes module
module.exports = function(app) {

    //Set up the get-recipes route
    app.get('/get-ingredients',ingredients.getIngredients);
};