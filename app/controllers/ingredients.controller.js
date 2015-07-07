/**
 * Created by dudi on 07/07/2015.
 */

var mongoose = require('mongoose'),
    url = require('url'),
    Ingredients = mongoose.model('Ingredient');

//get all the ingredients from the database
exports.getIngredients = function(req,res) {
    Ingredients.find().exec(function(err,data){
        res.status(200).json(data[0].items);
    });
};