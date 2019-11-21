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
      if (!searchQuery) {
        searchQuery = "mr nobody";
      };
      omdb.movieSearch(searchQuery);
      fs.appendFileSync('log.txt', command, function () {
      console.log(command)});
      break;
  
    case "music-this":
      if (!searchQuery) {
        searchQuery = "the sign ace of base";
      };
      spot.musicSearch(searchQuery);
      fs.appendFileSync('log.txt', command, function () {
        console.log(command)});
      break;
    
    case "concert-this":
      bands.concertSearch(searchQuery);
      fs.appendFileSync('log.txt', command, function () {
        console.log(command)});
      break;
    
    case "party-time":
      fileSystem.callFromFile();
      fs.appendFileSync('log.txt', command, function () {
        console.log(command)});
      break;
    default:
      console.log(
        "Error: Enter a valid search parameter -- 'movie-this', 'music-this', 'concert-this', or 'party-time'"
      );
      break;
  };