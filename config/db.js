const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://hasnain:Haider95@cluster0-opxki.mongodb.net/BloodDonation?retryWrites=true&w=majority"

mongoose.connect(mongoURI);

module.exports = mongoose;