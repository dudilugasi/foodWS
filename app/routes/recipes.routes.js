var recipes = require('../../app/controllers/recipes.controller');

module.exports = function(app) {
    app.get('/get-recipes',recipes.getRecipes);
};

