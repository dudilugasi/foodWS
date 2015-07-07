var mongoose = require('mongoose'),
    Recipes = mongoose.model('Recipe'),
    url = require('url'),
    util = require('./util.controller');

//receives an array of ingredients and an array of blocked recipes
//and returns all the recipes that do not have the ingredients and not a blocked recipe
exports.getRecipes = function(req,res) {
    var ingredients = url.parse(req.url,true).query.ingredients;
    var blockedRecipes = url.parse(req.url,true).query.blockedRecipes;
    ingredients = util.makeAnArray(ingredients);
    blockedRecipes = util.makeAnArray(blockedRecipes);
    console.log(ingredients,blockedRecipes);
    Recipes.find().where('ingredients.name').nin(ingredients).where('name').nin(blockedRecipes).exec(function(err,data){
        if (err) {
            return res.status(400).send({
                message: util.getErrorMessage(err)
            });
        }
        else {
            res.status(200).json(data);
        }
    });
};