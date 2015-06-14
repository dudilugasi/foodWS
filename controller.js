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

//returns the likes array of a user
exports.getUserLikes = function(req,res) {
    var userID =  url.parse(req.url,true).query.user_id;
    if (userID) {
        Users.findOne().where('user_id').equals(userID).exec(function (err, data) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.status(200).json(data.likes);
        });
    }
    else {
        res.header('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).json([]);
    }
};

//update the likes array of a user
exports.putUserLikes = function(req,res) {
    var userID = url.parse(req.url,true).query.user_id;
    var likes = url.parse(req.url,true).query.likes;
    likes = makeAnArray(likes);
    console.log(likes);
    Users.update({user_id: userID},{likes: likes}).exec(function(err,data){
        Users.findOne().where('user_id').equals(userID).exec(function (err, data) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.status(200).json(data);
        });
    });
};

//receives an array of ingredients and an array of blocked recipes
//and returns all the recipes that do not have the ingredients and not a blocked recipe
exports.getRecipes = function(req,res) {
    var ingredients = url.parse(req.url,true).query.ingredients;
    var blockedRecipes = url.parse(req.url,true).query.blockedRecipes;
    ingredients = makeAnArray(ingredients);
    blockedRecipes = makeAnArray(blockedRecipes);
    console.log(ingredients,blockedRecipes);
    Recipes.find().where('ingredients.name').nin(ingredients).where('name').nin(blockedRecipes).exec(function(err,data){
        res.header('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).json(data);
    });
};

//get all the ingredients from the database
exports.getIngredients = function(req,res) {
    Ingredients.find().exec(function(err,data){
        res.header('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).json(data[0].items);
    });
};

function makeAnArray(array) {
    //if the parameter is empty it will be empty array
    if (!array) {
        array = []
    }
    //if the parameter is not an array it will be an array with one element
    else if (!Array.isArray(array)) {
        array = [array];
    }
    return array;
}