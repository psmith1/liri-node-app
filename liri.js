require("dotenv").config({path: ".env"});
// var keys = require("./keys.js");
var axios = require("axios");
// var moment = require("moment");
// var Spotify = require("node-spotify-api");
var fs = require("fs");
var FS = require("./partytime");
var SPOT = require("./spotify");
var OMDB = require("./omdb");
var BANDS = require("./bandsintown");

var fileSystem = new FS();
var spot = new SPOT();
var omdb = new OMDB();
var bands = new BANDS();

var searchType = process.argv[2];
var searchQuery = process.argv[3];

var command = 'node' + ' liri.js ' + searchType + ' ' + searchQuery + ' ' + '\n';

  switch (searchType) {
    case "movie-this":
      omdb.movieSearch(searchQuery);
      fs.appendFile('log.txt', command, function () {
      console.log(command)});
      if (!searchQuery) {
        searchQuery = "mr nobody";
      };
      break;
  
    case "music-this":
      spot.musicSearch(searchQuery);
      if (!searchQuery) {
        searchQuery = "the sign ace of base";
      };
      break;
    
    case "concert-this":
      bands.concertSearch(searchQuery);
      break;
    
    case "party-time":
      fileSystem.callFromFile();
      break;
    default:
      console.log(
        "Error: Enter a valid search parameter -- 'movie-this', 'music-this', 'concert-this', or 'party-time'"
      );
      break;
  };