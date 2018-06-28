const text = require('../model/text');
const mongoose = require('mongoose');
const Text = mongoose.model('Text', text);
function respond(err, result, res) {
    if (err) {
        return res.status(500).json({error: err});
    }
    return res.json(result);
}
const TextController = {
    justify: (req, res) => {
        const newText = new Text({text : req.body, token: "un token d'exemple"});
        newText.save((err, user) => {
            console.log(user.text);
            console.log(user.text.length);
            // On enleve les guillemets
            const raw = JSON.stringify(user.text).slice(1, -1);
            //todo justifier le text
            return respond(err, raw, res);
        });
    }
};
module.exports = TextController;