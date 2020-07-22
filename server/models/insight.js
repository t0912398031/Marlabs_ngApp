const mongoose = require('mongoose')
// var exhibitSchema = require('./exhibit');

const Schema = mongoose.Schema;

const exhibitSchema = new Schema({
    title:String,
    image:String,
    source:String
});

const insightSchema = new Schema({
    title:String,
    topic:String,
    contributor: String,
    url:String,
    description:String,
    exhibits: [exhibitSchema],
    date:Date,
});

module.exports = mongoose.model('insight', insightSchema, 'insights')