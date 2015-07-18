
//Load the module dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define a new 'ingredientsSchema'
var ingredientsSchema = new Schema({
    name: {type: String, index: 1},
    description: String,
    category: String
});

// Define a new 'recipeSchema'
var recipeSchema = new Schema({
    name: {type: String, index: 1},
    time : String,
    serves: String,
    ingredients: [ingredientsSchema],
    directions : [String],
    meal : String,
    image: String
},{collection: 'recipes'});

// Create the 'Recipe' model out of the 'recipeSchema'
mongoose.model('Recipe',recipeSchema);