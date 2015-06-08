var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ingredientsSchema = new Schema({
    name: String,
    description: String
});

var recipeSchema = new Schema({
    name: String,
    time : String,
    serves: String,
    ingredients: [ingredientsSchema],
    directions : [String],
    meal : String,
    like: Boolean
},{collection: 'recipes'});



exports.recipeSchema = recipeSchema;