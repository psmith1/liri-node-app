var axios = require("axios");
var moment = require("moment");

var nodeArgs = process.argv;
var musicInput = " ";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 3; i < nodeArgs.length; i++) {
  if (i > 2 && i < nodeArgs.length) {
    musicInput = musicInput + " " + nodeArgs[i];
  } else {
    musicInput += nodeArgs[i];
  }
}

var BANDS = function() {
  this.concertSearch = function (query) {
    var queryUrl = "https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp";
    axios
    .get(queryUrl)
    .then(function(response) {
        console.log("------------------------------------------------------------");
        console.log("Venue: " + response.data[0].venue.name),
        console.log("Venue Location: " + response.data[0].venue.city),
        console.log("Date: " + moment(response.data[0].datetime).format("L")),
        console.log("------------------------------------------------------------");
      })
      .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } 
        console.log(error.config);
      });
  };
};

module.exports = BANDS;

