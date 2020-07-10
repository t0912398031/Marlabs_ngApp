const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mediaSchema = new Schema({
    title:String,
    topic:String,
    url:String,
    description:String,
    date:Date,
});

module.exports = mongoose.model('media', mediaSchema, 'medias')