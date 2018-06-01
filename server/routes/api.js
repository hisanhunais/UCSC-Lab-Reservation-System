const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Video = require('../models/video');

const db = "mongodb://hisan:Sacrificer1!@ds221339.mlab.com:21339/videoplayer";
mongoose.Promise = global.Promise;

mongoose.connect(db, function(err){
    if(err)
    {
        console.error("Error : " + err);
    }
});

router.get('/videos', function(req, res){
    console.log("Get request for all videos");
    Video.find({})
    .exec(function(err, videos){
        if(err)
        {
            console.log("Error retrieving videos");
        }
        else
        {
            res.json(videos);
        }
    });
});

router.get('/videos/:id', function(req, res){
    console.log("Get request for a single video");
    Video.findById(req.params.id)
    .exec(function(err, video){
        if(err)
        {
            console.log("Error retrieving video");
        }
        else
        {
            res.json(video);
        }
    });
});

router.post('/video', function(req, res){
    console.log("Post a Video");
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(function(err, insertedVideo){
        if(err)
        {
            console.log("Error saving video");
        }
        else
        {
            res.json(insertedVideo);
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