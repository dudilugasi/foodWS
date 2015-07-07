var ingredients = require('../../app/controllers/ingredients.controller');

module.exports = function(app) {
    app.get('/get-ingredients',ingredients.getIngredients);
};