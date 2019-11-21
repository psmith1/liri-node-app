var fs = require("fs")
var SPOT = require("./spotify")
var OMDB = require("./omdb")
var BANDS = require("./bandsintown")

var spot = new SPOT();
var omdb = new OMDB();
var bands = new BANDS();

var FS = function() {
    this.callFromFile = function() {

        fs.readFile("random.txt", "utf8", function(err, data) {
          if (err) {
            return console.log(err);
          }
          var array = data.split(',');
          var command = 'node' + ' liri.js ' + array[0] + ' ' + array[1] + ' ' + '\n';
          var append = fs.appendFile('log.txt', command, function () {
            console.error()});

          switch(array[0]) {
            case "movie-this":
              omdb.movieSearch(array[1]);
              break;
            case "music-this":
              spot.musicSearch(array[1]);
              break;
            case "concert-this":
              bands.concertSearch(array[1]);
              break;
            default:
              console.log("Error: invalid entry")
              break;
          };
        });
      };
    };

module.exports = FS;
