const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bcryptjs = require('bcryptjs')

const jwt = require('jsonwebtoken')

const UserSchema = new Schema({
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
UserSchema.methods.comparePassword = function(password) {
    const user = this
    
    return bcryptjs.compareSync(password, user.password)
}
UserSchema.methods.generateToken = async function(){
    const user = this
    //payload
    const token = jwt.sign({_id: user._id }, "hasnain95", {})
    user.token = token;
    await user.save()
    return token
}
// Hook thaat will run before ( new Users()).save()
UserSchema.pre("save", function(next){
    const user = this
    if(user.isModified('password')){
        const salt = bcryptjs.genSaltSync(10);
        const hash = bcryptjs.hashSync(user.password, salt)
        user.password = hash;
        console.log('user.password ===> ' , user.password)
    }
        next();
    })
const User = mongoose.model('Posts', UserSchema);

module.exports = User;