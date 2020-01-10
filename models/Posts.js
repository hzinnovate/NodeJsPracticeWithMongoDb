const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resultSchema = new Schema({
    result: Object,
    name: {
        type: String,
        text: true
    }
})

const Result = mongoose.model('Posts', resultSchema);

module.exports = Result;