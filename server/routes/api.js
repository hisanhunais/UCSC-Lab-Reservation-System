const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Book = require('../models/book');

//const db = "mongodb://hisan:Sacrificer1!@ds221339.mlab.com:21339/videoplayer";
const db = "mongodb://localhost:27017/library";
mongoose.Promise = global.Promise;

mongoose.connect(db, function(err){
    if(err)
    {
        console.error("Error : " + err);
    }
});

router.get('/', function(req,res){
    res.send('api works');
})

router.get('/books', function(req, res){
    console.log("Get request for all books");
    Book.find({})
    .exec(function(err, books){
        if(err)
        {
            console.log("Error retrieving books");
        }
        else
        {
            res.json(books);
        }
    });
});

router.get('/books/:id', function(req, res){
    console.log("Get request for a single book");
    Book.findById(req.params.id)
    .exec(function(err, book){
        if(err)
        {
            console.log("Error retrieving book");
        }
        else
        {
            res.json(book);
        }
    });
});

router.post('/book', function(req, res){
    console.log("Post a Book");
    var newBook = new Book();
    newBook.isbn = req.body.isbn;
    newBook.name = req.body.name;
    newBook.category = req.body.category;
    newBook.author = req.body.author;
    newBook.publisher = req.body.publisher;
    newBook.edition = req.body.edition;
    newBook.noOfCopies = req.body.noOfCopies;
    newBook.save(function(err, insertedBook){
        if(err)
        {
            console.log("Error saving book");
        }
        else
        {
            res.json(insertedBook);
        }
    });
});

router.put('/video/:id', function(req, res){
    console.log("Update a Video");
    Video.findByIdAndUpdate(req.params.id,
    {
        $set: {title: req.body.title, url: req.body.url, description: req.body.description}
    },
    {
        new: true
    },
    function(err, insertedVideo)
    {
        if(err)
        {
            res.send("Error Updating video");
        }
        else
        {
            res.json(insertedVideo);
        }
    }
    );  
});

router.delete('/video/:id', function(req, res){
    console.log("Delete a Video");
    Video.findByIdAndRemove(req.params.id,
    function(err, deletedVideo)
    {
        if(err)
        {
            res.send("Error Deleting video");
        }
        else
        {
            res.json(deletedVideo);
        }
    }
    );  
});

module.exports = router;