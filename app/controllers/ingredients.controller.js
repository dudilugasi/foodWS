/**
 * Created by dudi on 07/07/2015.
 */

var mongoose = require('mongoose'),
    url = require('url'),
    Ingredients = mongoose.model('Ingredient');

//get all the ingredients from the database
exports.getIngredients = function(req,res) {
    Ingredients.find().exec(function(err,data){
        if (err) {
            return res.status(400).send({
                message: util.getErrorMessage(err)
            });
        }
        else {
            res.status(200).json(data[0].items);
        }
    });
};