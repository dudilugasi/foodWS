/**
 * Created by dudi on 07/07/2015.
 */
var mongoose = require('mongoose'),
    Users = mongoose.model('User'),
    url = require('url'),
    util = require('./util.controller');

//returns a user
exports.getUser = function(req,res) {
    var userID =  url.parse(req.url,true).query.user_id;
    if (userID) {
        Users.findOne().where('user_id').equals(userID).exec(function (err, data) {
            if (err) {
                return res.status(400).send({
                    message: util.getErrorMessage(err)
                });
            }
            else {
                res.status(200).json(data);
            }
        });
    }
    else {
        res.status(400).send({
            message: 'no user id parameter received'
        });
    }
};

//update the likes array of a user
exports.putUserLikes = function(req,res) {
    var userID = url.parse(req.url,true).query.user_id;
    var likes = url.parse(req.url,true).query.likes;
    likes = util.makeAnArray(likes);
    console.log(likes);
    if (userID) {
        Users.update({user_id: userID}, {likes: likes}).exec(function (err, data) {
            if (err) {
                return res.status(400).send({
                    message: util.getErrorMessage(err)
                });
            }
            else {
                Users.findOne().where('user_id').equals(userID).exec(function (err, data) {
                    if (err) {
                        return res.status(400).send({
                            message: util.getErrorMessage(err)
                        });
                    }
                    else {
                        res.status(200).json(data);
                    }
                });
            }
        });
    }
    else {
        res.status(400).send({
            message: 'no user id parameter received'
        });
    }
};

//update the blocked recipes array of a user
exports.putUserBlocked = function(req,res) {
    var userID = url.parse(req.url,true).query.user_id;
    var blocked = url.parse(req.url,true).query.blocked;
    blocked = util.makeAnArray(blocked);
    console.log(blocked);
    if (userID) {
        Users.update({user_id: userID}, {blocked: blocked}).exec(function (err, data) {
            if (err) {
                return res.status(400).send({
                    message: util.getErrorMessage(err)
                });
            }
            else {
                Users.findOne().where('user_id').equals(userID).exec(function (err, data) {
                    if (err) {
                        return res.status(400).send({
                            message: util.getErrorMessage(err)
                        });
                    }
                    else {
                        res.status(200).json(data);
                    }
                });
            }
        });
    }
    else {
        res.status(400).send({
            message: 'no user id parameter received'
        });
    }
};

