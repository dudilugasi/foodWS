var express = require('express');
var controller = require('./recipe_controller');
var bodyParser = require('body-parser');
var app = express();
app.set('json spaces',4);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/get-recipes',controller.getRecipes);

app.post('/like-recipe/',controller.likeRecipe);

app.listen(8000);