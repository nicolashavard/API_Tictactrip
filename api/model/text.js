const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TextSchema = new Schema({
        text: {type: String, required: true},
        token: {type: String, required: true}
    },
);
module.exports = TextSchema;