var mongoose = require('mongoose');
var url = require('url');

mongoose.connect('mongodb://dudi:lugasi@ds045252.mongolab.com:45252/food');

var recipeSchema = require('./recipe_schema').recipeSchema;
var ingredientsSchema = require('./ingredients_schema').ingredientsSchema;

mongoose.model('ingredientsM',ingredientsSchema);
mongoose.model('recipesM',recipeSchema);

var Recipes = mongoose.model('recipesM');
var Ingredients = mongoose.model('ingredientsM');

exports.getRecipes = function(req,res) {
    var ingredients = url.parse(req.url,true).query.ingredients;
    if (!ingredients) {
        ingredients = []
    }
    else if (!Array.isArray(ingredients)) {
        ingredients = [ingredients];
    }
    console.log(ingredients);
    Recipes.find().where('ingredients.name').nin(ingredients).exec(function(err,data){
        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(data);
    });
};

exports.likeRecipe = function(req,res) {
    var recipe = req.body.name;
    console.log(recipe);
    Recipes.findOne().where('name').equals(recipe).exec(function(err,data){
        data.update({$set:{like: !data.like}}).exec(function (err, result) {
            res.header('Access-Control-Allow-Origin', '*');
            res.status(200).json(data);
        })
    });
};

exports.getIngredients = function(req,res) {
    Ingredients.find().exec(function(err,data){
        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(data[0].items);
    });
};