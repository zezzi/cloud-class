const Vision = require('@google-cloud/vision')
const PROJECT_ID = "ufm-vision-api"

const visionClient = Vision({
  projectId: PROJECT_ID,
  credentials: require('/Users/zezzi/ufm/cloud/cloud-ejercicio/keystore.json')
});

var types = [
    'face',
    'label',
    'landmarks',
    'logos',
    'properties',
]

//Excercise 1
//https://cloud.google.com/vision/docs/images/demo-image.jpg
/*visionClient.detect('demo-image.jpg', types, function(err, detections, apiResponse) {
    // code
})*/



//http://netdna.webdesignerdepot.com/uploads/2013/08/batman.jpg
/*visionClient.detectText('batman.jpg', function(err, text) {
    //code 
})*/



//http://s3.amazonaws.com/etntmedia/media/images/ext/543627202/happy-people-friends.jpg
/*visionClient.detectFaces('happy-people-friends.jpg')
  .then((results) => {
    // code
  });*/

  /*visionClient.detectLandmarks("landmark.jpg")
  .then((results) => {
    //code
  });*/