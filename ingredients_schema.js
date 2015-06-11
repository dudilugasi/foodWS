var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ingredientsSchema =  new Schema({
    items: [{category: String, ingredients: [{name: String}]}]
},{collection: 'ingredients'});

exports.ingredientsSchema = ingredientsSchema;

