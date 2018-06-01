const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const labSchema = new Schema({
    name: String,
    description: String,
    location: String,
    noOfComputers: Number,
    projector: String
});

module.exports = mongoose.model('lab', labSchema, 'labs');