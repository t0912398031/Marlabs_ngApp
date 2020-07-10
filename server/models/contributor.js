const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const contributorSchema = new Schema({
    firstName:String,
    lastName:String,
    position:String,
    photo: String
});

module.exports = mongoose.model('contributor', contributorSchema, 'contributors')