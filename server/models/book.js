const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    isbn: Number,
    name: String,
    category: String,
    author: String,
    publisher: String,
    edition: Number,
    noOfCopies: Number
});

module.exports = mongoose.model('book', bookSchema, 'books');