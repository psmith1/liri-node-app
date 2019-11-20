var axios = require("axios");

var nodeArgs = process.argv;
var movieInput = ' ';

for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {
    movieInput = movieInput + ' ' + nodeArgs[i];
  } else {
    movieInput += nodeArgs[i];
  }
}

var OMDB = function() {
  this.movieSearch = function() {
    var queryUrl = "http://www.omdbapi.com/?t=" + movieInput + "&y=&plot=short&apikey=trilogy";
  axios.get(queryUrl)
  .then(function(response) {
    console.log("------------------------------------------------------------"),
    console.log("Movie: " + response.data.Title),
    console.log("Release Year: " + response.data.Year),
    console.log("IMDB Score: " + response.data.imdbRating),
    console.log("Rotten Tomatoes Score: " + response.data.Ratings[1].Value),
    console.log("Country: " + response.data.Country),
    console.log("Language: " + response.data.Language),
    console.log("Plot: " + response.data.Plot),
    console.log("Actors: " + response.data.Actors),
    console.log("------------------------------------------------------------");
  })
  .catch(function(error) {
    if (error) {
      return console.log("Error: Use proper command syntax " + error.response)
    };

    // if (error.response) {
    //   // The request was made and the server responded with a status code
    //   // that falls out of the range of 2xx
    //   console.log("---------------Data---------------");
    //   console.log(error.response.data);
    //   console.log("---------------Status---------------");
    //   console.log(error.response.status);
    //   console.log("---------------Status---------------");
    //   console.log(error.response.headers);
    // } else if (error.request) {
    //   // The request was made but no response was received
    //   // `error.request` is an object that comes back with details pertaining to the error that occurred.
    //   console.log(error.request);
    // } else {
    //   // Something happened in setting up the request that triggered an Error
    //   console.log("Error", error.message);
    // }
    // console.log(error.config);
  });
};
};
module.exports = OMDB;