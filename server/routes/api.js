var express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');
const Media = require('../models/media');
const insightSchema = require('../models/insight');
const exhibitSchema = require('../models/exhibit');
const Insight = mongoose.model('insight');
const Exhibit = mongoose.model('exhibit');


//connection string
// const db = "mongodb://localhost:27017/videoplayer";
// const db = "mongodb+srv://lipang:lipang@cluster0-hwju3.mongodb.net/videoplayer?retryWrites=true&w=majority"
const db = "mongodb+srv://lipang:lipang@cluster0-hwju3.mongodb.net/videoplayer"
mongoose.Promise = global.Promise;
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
    if(err){
        console.error("Error! "+ err);
    } else{
        console.error("connected to mongodb!");
    }
});


var test2 = new Exhibit(
    {
        title:'Comparison of Therapeutic Approaches to COVID-19',
        image:'http://www.westernasset.com/common/img/commentary/whitepapers/coronavirus-task-force-2020-05-exhibit-2.png',
        source:'WA estimates. As of 27 Apr 20. Select the image to expand the view.'
    }
);

var test3 = new Exhibit(
    {
        title:'test',
        image:'http://www.westernasset.com/common/img/commentary/whitepapers/coronavirus-task-force-2020-05-exhibit-2.png',
        source:'WA estimates. As of 27 Apr 20. Select the image to expand the view.'
    }
);
var test4 = new Exhibit(
    {
        title:'TTTT',
        image:'http://www.westernasset.com/common/img/commentary/whitepapers/coronavirus-task-force-2020-05-exhibit-2.png',
        source:'WA estimates. As of 27 Apr 20. Select the image to expand the view.'
    }
);

var test = new Insight(
    {
        title:"Western Asset's COVID-19 Outlook: Views from the Coronavirus Task Force",
        subtitle: 'In January 2020, as COVID-19 spread in China, Western Asset assembled a cross-disciplinary task force to analyze the virus and its threat to the global economy. While Western Asset has not been immune from the market’s severe reaction to the pandemic, we continue to aggressively pursue a better understanding of the virus’ future impact and adapt our investment strategy accordingly. Here we discuss our approach to both the virus at present, and also its aftermath in terms of policy, containment, economic growth and investment returns.',
        topic:'MARKETS',
        contributor: 'Mark A. Hughes, Dr. Rajiv Sachdeva',
        url:'',
        description:'Before discussing COVID-19 and its massive impact on the globe, we at Western Asset first want to wish you and your family the best during these unsettling times. We are all adapting to new personal and lifestyle circumstances, bringing additional challenges to navigating the volatile markets. However, as we make progress toward the recovery stage of this crisis, the entire Western Asset team hopes to continue to be a resource for you.',
        exhibits:[test2, test3],
        date:new Date("2020-05-07"),
    }
);


   test.exhibits.push(test4)

test.save(function (err) {
  if (err) return handleError(err);
  console.log('saved!')
  // saved!
});



// var test2 = new Exhibit(
//     {
//         title:'Comparison of Therapeutic Approaches to COVID-19',
//         image:'http://www.westernasset.com/common/img/commentary/whitepapers/coronavirus-task-force-2020-05-exhibit-2.png',
//         source:'WA estimates. As of 27 Apr 20. Select the image to expand the view.'
//     }
// );
// test2.save(function (err) {
//   if (err) return handleError(err);
//   console.log('saved!')
//   // saved!
// });



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


router.get('/insights', function(req, res){
    console.log("Get Request for all insights");
    Insight.find({})
        .exec(function(err, insights){
            if(err)
            {
                console.log("Error Retrieving Insights");
            }
            else{
                res.json(insights);
            }
        });
});
module.exports = router;