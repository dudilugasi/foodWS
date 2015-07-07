var users = require('../../app/controllers/users.controller');

module.exports = function(app) {
    app.get('/get-user',users.getUser);

    app.get('/add-likes',users.putUserLikes);

    app.get('/add-blocked',users.putUserBlocked);  
};