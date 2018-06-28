const user = require('../model/user');
const mongoose = require('mongoose');
const User = mongoose.model('User', user);
function respond(err, result, res) {
    if (err) {
        return res.status(500).json({error: err});
    }
    return res.json(result);
}
const UserController = {
    getAll: (req, res) => {
        User.find({}, (err, user) => {
            return respond(err, user, res);
        });
    },
    create: (req, res) => {
        const newUser = new User(req.body);
        newUser.save((err, user) => {
            return respond(err, user, res);
        });
    },
    get: (req, res) => {
        User.findById(req.params.id, (err, user) => {
            return respond(err, user, res);
        });
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
            return respond(err, user, res);
        });
    },
    delete: (req, res) => {
        User.findByIdAndRemove(req.params.id, (err, user) => {
            return respond(err, user, res);
        });
    }
};
module.exports = UserController;