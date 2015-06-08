var mongoose = require('mongoose');
var url = require('url');
mongoose.connect('mongodb://dudi:lugasi@ds045252.mongolab.com:45252/food');
var recipeSchema = require('./recipe_schema').recipeSchema;
mongoose.model('recipesM',recipeSchema);
var Recipes = mongoose.model('recipesM');

exports.getRecipes = function(req,res) {
    var ingredients = url.parse(req.url,true).query.ingredients;
    if (!ingredients) {
        ingredients = []
    }
    else if (!ingredients.isArray) {
        ingredients = [ingredients];
    }
    Recipes.find().where('ingredients.name').nin(ingredients).exec(function(err,data){
        res.status(200).json(data);
    });
};

exports.likeRecipe = function(req,res) {
    var recipe = req.body.name;
    console.log(recipe);
    Recipes.findOne().where('name').equals(recipe).exec(function(err,data){
        data.update({$set:{like: !data.like}}).exec(function (err, result) {
            res.status(200).json(data);
        })
    });
};