// Load the module dependencies
var mongoose = require('mongoose'),
    Recipes = mongoose.model('Recipe'),
    url = require('url'),
    util = require('./util.controller');

//Create a method that receives an array of ingredients and an array of blocked recipes
//and returns all the recipes that do not have the ingredients and not a blocked recipe
exports.getRecipes = function(req,res) {
    //Extract the parameters from the url
    var ingredients = url.parse(req.url,true).query.ingredients;
    var blockedRecipes = url.parse(req.url,true).query.blockedRecipes;

    //Change the parameters to an array
    ingredients = util.makeAnArray(ingredients);
    blockedRecipes = util.makeAnArray(blockedRecipes);
    console.log(ingredients,blockedRecipes);

    // Find a list of recipes within the model that fit the rules
    Recipes.find().where('ingredients.name').nin(ingredients).where('name').nin(blockedRecipes).exec(function(err,data){
        if (err) {
            // If there was an error send the error message
            return res.status(400).send({
                message: util.getErrorMessage(err)
            });
        }
        else {
            // Send a JSON representation of the recipes
            res.status(200).json(data);
        }
    });
};

//Creates a method that will send all the ingredients
exports.getIngredients = function(req,res) {
    //get from each recipe the ingredients and group in by categories
    Recipes.aggregate([
        {$unwind: '$ingredients'},
        {$group: { _id: "$ingredients.category" , ingredients: {$addToSet: {name : "$ingredients.name"}}}}
    ]).exec(function(err,data) {
        if (err) {
            // If there was an error send the error message
            return res.status(400).send({
                message: util.getErrorMessage(err)
            });
        }
        else {
            // Send a JSON representation of the ingredients
            res.status(200).json(data);
        }
    });
};