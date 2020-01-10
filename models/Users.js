const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: {
        type: String,
        text: true
    },
    email: {
        type: String,
        required: true
    },
    address: String,
    age: Number,
    friendIdes: Array,
})

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;