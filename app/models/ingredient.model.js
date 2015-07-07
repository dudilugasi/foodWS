/**
 * Created by dudi on 07/07/2015.
 */

//Load the module dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ingredientsSchema =  new Schema({
    items: [{category: String, ingredients: [{name: String}]}]
},{collection: 'ingredients'});

mongoose.model('Ingredient',ingredientsSchema);