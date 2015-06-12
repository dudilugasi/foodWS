var mongoose = require('mongoose');
var url = require('url');

mongoose.connect('mongodb://dudi:lugasi@ds045252.mongolab.com:45252/food');

var recipeSchema = require('./recipe_schema').recipeSchema;
var ingredientsSchema = require('./ingredients_schema').ingredientsSchema;
var usersSchema = require("./user_schema").userSchema;

mongoose.model('ingredientsM',ingredientsSchema);
mongoose.model('recipesM',recipeSchema);
mongoose.model('usersM',usersSchema);

var Recipes = mongoose.model('recipesM');
var Ingredients = mongoose.model('ingredientsM');
var Users = mongoose.model('usersM');


exports.getUserLikes = function(req,res) {
    var userID =  url.parse(req.url,true).query.user_id;
    if (userID) {
        Users.findOne().where('user_id').equals(userID).exec(function (err, data) {
            res.header('Access-Control-Allow-Origin', '*');
            res.status(200).json(data.likes);
        });
    }
    else {
        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json([]);
    }
};

exports.putUserLikes = function(req,res) {
    var userID = req.body.user_id;
    var likes = req.body.likes;
    console.log(userID,likes);
    Users.update({user_id: userID},{likes: likes}).exec(function(err,data){
        Users.findOne().where('user_id').equals(userID).exec(function (err, data) {
            res.header('Access-Control-Allow-Origin', '*');
            res.status(200).json(data);
        });
    });
};

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

exports.getIngredients = function(req,res) {
    Ingredients.find().exec(function(err,data){
        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).json(data[0].items);
    });
};