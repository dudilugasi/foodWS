var express = require('express');
var controller = require('./controller');
var bodyParser = require('body-parser');
var app = express();
app.set('json spaces',4);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/get-recipes',controller.getRecipes);

app.get('/get-ingredients',controller.getIngredients);

app.route('/likes').get(controller.getUserLikes).put(controller.putUserLikes);
app.listen(8000);

console.log('listening');