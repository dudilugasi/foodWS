var express = require('express');
var controller = require('./controller');
var bodyParser = require('body-parser');
var app = express();
app.set('json spaces',4);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/get-recipes',controller.getRecipes);

app.get('/get-ingredients',controller.getIngredients);

app.get('/get-user',controller.getUser);

app.get('/add-likes',controller.putUserLikes);

app.get('/add-blocked',controller.putUserBlocked);

app.listen(process.env.PORT || 8000);

console.log('listening');

//usr/local/bin/node