/**
 * Created by dudi on 07/07/2015.
 */

//Load the module dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ingredientsSchema = new Schema({
    name: {type: String, index: 1},
    description: String
});

var recipeSchema = new Schema({
    name: {type: String, index: 1},
    time : String,
    serves: String,
    ingredients: [ingredientsSchema],
    directions : [String],
    meal : String,
    image: String
},{collection: 'recipes'});

mongoose.model('Recipe',recipeSchema);