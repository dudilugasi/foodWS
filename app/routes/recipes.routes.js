// Load the module dependencies
var recipes = require('../../app/controllers/recipes.controller');

// Define the recipes routes module
module.exports = function(app) {

    //Set up the get-recipes route
    app.get('/get-recipes',recipes.getRecipes);

    app.get('/ingredients',recipes.getIngredients);
};

