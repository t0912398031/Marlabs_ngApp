const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const exhibitSchema = new Schema({
    title:String,
    image:String,
    source:String
});

module.exports = mongoose.model('exhibit', exhibitSchema, 'exhibits')