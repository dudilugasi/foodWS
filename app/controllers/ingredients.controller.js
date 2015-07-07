// Load the module dependencies
var mongoose = require('mongoose'),
    Ingredients = mongoose.model('Ingredient');

//Create a method that get ingredients
exports.getIngredients = function(req,res) {
    // Find a list of ingredients within the model
    Ingredients.find().exec(function(err,data){
        if (err) {
            // If there was an error send the error message
            return res.status(400).send({
                message: util.getErrorMessage(err)
            });
        }
        else {
            // Send a JSON representation of the ingredients
            res.status(200).json(data[0].items);
        }
    });
};