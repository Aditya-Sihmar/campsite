const mongoose = require('mongoose'),
      Campground = require('./models/campground');
      Comment    = require('./models/comment');
let Data = [
    {
        title:"Night Life",
        image:"https://inteng-storage.s3.amazonaws.com/img/iea/MRw4y5ABO1/sizes/camping-tech-trends_resize_md.jpg",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de"
    },
    {
        title:"Night Life",
        image:"https://inteng-storage.s3.amazonaws.com/img/iea/MRw4y5ABO1/sizes/camping-tech-trends_resize_md.jpg",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de"
    },
    {
        title:"Night Life",
        image:"https://inteng-storage.s3.amazonaws.com/img/iea/MRw4y5ABO1/sizes/camping-tech-trends_resize_md.jpg",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with de Pleasant Night"
    }
];

function seedDB() {
    // Campground Removed
    Campground.remove({},function(err) {
        // if(err) {
        //     console.log(err);
        // } else {
        //     console.log('Campground Removed');
        //     Comment.remove({},function(err) {
        //         if(err) {
        //             console.log(err);
        //         } else {
        //             console.log('Comments Removed');
        //         }
        //     })
        //     // New Campground Created
        //     Data.forEach(function(seed) {
        //         Campground.create(seed,function(err,campground){
        //             if(err) {
        //                 console.log(err);
        //             } else {
        //                 console.log("Campground Created");
        //                 Comment.create(
        //                     {
        //                         text:"Comment is created",
        //                         author:"Destiny"
        //                     },function(err,comment) {
        //                         if(err) {
        //                             console.log(err);
        //                         } else {
        //                             campground.comments.push(comment);
        //                             campground.save();
        //                             console.log("Comments Created");
        //                         }
        //                     });
        //             }
        //         });
        //     });
        //}
    });

    
}

module.exports = seedDB;