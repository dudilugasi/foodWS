
//Load the module dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define a new 'ingredientsSchema'
var ingredientsSchema =  new Schema({
    items: [{category: String, ingredients: [{name: String}]}]
},{collection: 'ingredients'});

// Create the 'Ingredient' model out of the 'ingredientsSchema'
mongoose.model('Ingredient',ingredientsSchema);