var express = require('express');

module.exports = function() {
    var app = express();

    //configure body parser
    app.set('json spaces',4);

    //add access control response
    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    // Load the routing files
    require('../app/routes/users.routes.js')(app);
    require('../app/routes/ingredients.routes.js')(app);
    require('../app/routes/recipes.routes.js')(app);

    // Configure static file serving
    app.use(express.static('./public'));

    return app;
};