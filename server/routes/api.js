var express = require('express');
const router = express.Router();
const mongoos = require('mongoose');
const Video = require('../models/video');
const Media = require('../models/media');

//connection string
// const db = "mongodb://localhost:27017/videoplayer";
// const db = "mongodb+srv://lipang:lipang@cluster0-hwju3.mongodb.net/videoplayer?retryWrites=true&w=majority"
const db = "mongodb+srv://lipang:lipang@cluster0-hwju3.mongodb.net/videoplayer"
mongoos.Promise = global.Promise;
mongoos.connect(db, {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
    if(err){
        console.error("Error! "+ err);
    } else{
        console.error("connected to mongodb!");
    }
});

router.get('/videos', function(req, res){
    console.log("Get Request for all videos");
    Video.find({})
        .exec(function(err, videos){
            if(err)
            {
                console.log("Error Retrieving Videos");
            }
            else{
                res.json(videos);
            }
        });
});


router.get('/videos/:id', function(req, res){
    console.log("Get Request for a single video");
    Video.findById(req.params.id)
        .exec(function(err, video){
            if(err)
            {
                console.log("Error Retrieving Video");
            }
            else{
                res.json(video);
            }
        });
});

router.post('/videos', function(req, res){
    console.log("Post a video");
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
   
    newVideo.save(function(err, insertedVideo){
        if(err){
            console.log("Error Saving Video")
        }
        else{
            res.json(insertedVideo);
        }
    });
       
});


router.put('/videos/:id', function(req, res){
    console.log("Updaitng a video");
    
    Video.findByIdAndUpdate(req.params.id, 
        {
            $set:{title:req.body.title, url:req.body.url, description:req.body.description}
        },
        {
            new:true
        },
        function(err, updatedVideo){
            if(err){
                res.send("Error updating the video")
            }
            else{
                res.json(updatedVideo);
            }
        }  
    );   
});



router.delete('/videos/:id', function(req, res){
    console.log("Deleting a video");
    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        if(err){
            res.send("Error deleting the video")
        }
        else{
            res.json(deletedVideo);
        }
    });
});




router.get('/medias', function(req, res){
    console.log("Get Request for all medias");
    Media.find({})
        .exec(function(err, medias){
            if(err)
            {
                console.log("Error Retrieving Medias");
            }
            else{
                res.json(medias);
            }
        });
});

module.exports = router;