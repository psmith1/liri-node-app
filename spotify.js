require('dotenv').config();
var SPOT = require('node-spotify-api');
var key = require("./keys");

var spotify = new SPOT(key.spotify);

//     id: "5f3b84443ecd406fa1a28b204b6889c3",
//     secret: "369fab45d0d141a8a941f3e82edf6959"
// });

var SPOT = function() {

    this.musicSearch = function(query) {
        spotify.search({ type: "track", query: query }, function(err, data, query) {
        if (err) {
        return console.log("Error occurred: " + err);
        }
            console.log("------------------------------------------------------------");
            console.log("artists: " + data.tracks.items[1].album.artists[0].name);
            console.log("song name: " + data.tracks.items[1].name);
            console.log("preview url: " + data.tracks.items[1].preview_url);
            console.log("external url: " + data.tracks.items[1].external_urls.spotify);
            console.log("album name: " + data.tracks.items[1].album.name);
            console.log("------------------------------------------------------------");
            });
        }
}

module.exports = SPOT;