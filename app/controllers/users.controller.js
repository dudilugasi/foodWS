// Load the module dependencies
var mongoose = require('mongoose'),
    Users = mongoose.model('User'),
    url = require('url'),
    util = require('./util.controller');

//Create a method that get a user from user_id
exports.getUser = function(req,res) {
    //Extract the parameters from the url
    var userID =  url.parse(req.url,true).query.user_id;

    if (userID) {
        //If the userID is not null
        // Find the user that matches the user_id
        Users.findOne().where('user_id').equals(userID).exec(function (err, data) {
            if (err) {
                // If there was an error send the error message
                return res.status(400).send({
                    message: util.getErrorMessage(err)
                });
            }
            else {
                if (data) {
                    // Send a JSON representation of the user
                    res.status(200).json(data);
                }
                else {
                    res.status(400).send({
                        // If there was no user_id send error message
                        message: 'no user found with id: ' + userID
                    });
                }
            }
        });
    }
    else {
        res.status(400).send({
            // If there was no user_id send error message
            message: 'no user id parameter received'
        });
    }
};

//Create a method that update a user likes array
exports.putUserLikes = function(req,res) {
    //Extract the parameters from the url
    var userID = url.parse(req.url,true).query.user_id;
    var likes = url.parse(req.url,true).query.likes;

    //Change the parameters to an array
    likes = util.makeAnArray(likes);
    console.log(likes);
    if (userID) {
        //If the userID is not null
        // Update the user that matches the user_id
        Users.update({user_id: userID}, {likes: likes}).exec(function (err, data) {
            if (err) {
                // If there was an error send the error message
                return res.status(400).send({
                    message: util.getErrorMessage(err)
                });
            }
            else {
                // Find the user that matches the user_id
                Users.findOne().where('user_id').equals(userID).exec(function (err, data) {
                    if (err) {
                        // If there was an error send the error message
                        return res.status(400).send({
                            message: util.getErrorMessage(err)
                        });
                    }
                    else {
                        if (data) {
                            // Send a JSON representation of the user
                            res.status(200).json(data);
                        }
                        else {
                            res.status(400).send({
                                // If there was no user_id send error message
                                message: 'no user found with id: ' + userID
                            });
                        }
                    }
                });
            }
        });
    }
    else {
        res.status(400).send({
            // If there was no user_id send error message
            message: 'no user id parameter received'
        });
    }
};

//Create a method that update a user blocked array
exports.putUserBlocked = function(req,res) {
    //Extract the parameters from the url
    var userID = url.parse(req.url,true).query.user_id;
    var blocked = url.parse(req.url,true).query.blocked;

    //Change the parameters to an array
    blocked = util.makeAnArray(blocked);
    console.log(blocked);
    if (userID) {
        //If the userID is not null
        // Update the user that matches the user_id
        Users.update({user_id: userID}, {blocked: blocked}).exec(function (err, data) {
            if (err) {
                // If there was an error send the error message
                return res.status(400).send({
                    message: util.getErrorMessage(err)
                });
            }
            else {
                // Find the user that matches the user_id
                Users.findOne().where('user_id').equals(userID).exec(function (err, data) {
                    if (err) {
                        // If there was an error send the error message
                        return res.status(400).send({
                            message: util.getErrorMessage(err)
                        });
                    }
                    else {
                        if (data) {
                            // Send a JSON representation of the user
                            res.status(200).json(data);
                        }
                        else {
                            res.status(400).send({
                                // If there was no user_id send error message
                                message: 'no user found with id: ' + userID
                            });
                        }
                    }
                });
            }
        });
    }
    else {
        res.status(400).send({
            // If there was no user_id send error message
            message: 'no user id parameter received'
        });
    }
};

