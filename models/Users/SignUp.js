const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bcryptjs = require('bcryptjs')

const jwt = require('jsonwebtoken')

const SignUpSchema = new Schema({
    name: String,
    email: {
        type: String,
        text: true,
        required: true,
        index: true,
        unique: true,
        dropDups: true
    },
    password: {
        type: String,
        required: true
    },
    address: String,
    age: Number,
    token: String
})

SignUpSchema.pre("save", function(next){
    const user = this
    if(user.isModified('password')){
        const salt = bcryptjs.genSaltSync(10);
        const hash = bcryptjs.hashSync(user.password, salt)
        user.password = hash;
        console.log('user.password ===> ' , user.password)
    }
        next();
    })
const Registration = mongoose.model('Posts', SignUpSchema);

module.exports = Registration;