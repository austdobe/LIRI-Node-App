//Set variable environment
require("dotenv").config();
var axios = require("axios")
var Spotify = require("node-spotify-api")
var moment = require("moment")

//Import file keys
var keys = require("./keys.js")

//Access Spotify key on hidden file
var spotify = new Spotify(keys.spotify)

//Set search parameter
var search= process.argv[3];
var parameters=process.argv[2]

switch (parameters){
case "spotify":
    musicSearch()
    break;
case "band":
    bandSearch();
    break;
case "movie":
    movieSearch();
    break;
default:
    console.log("Sorry that is an incorrect search, please try spotify, band, or movie.")
    break;
}


//Set axios call for music using spotify API
function musicSearch(){
    spotify.search({type: "track", query: search}).then(function(response) {
        var song = response.tracks.items
        console.log("Artist: " + song[0].artists[0].name)
        console.log("Song Name: "+ song[0].name)
        console.log("Song Link: "+ song[0].url)
        console.log("Album: "+ song.album)
        }
    ).catch(function(err) {
    console.error('Error occurred: ' + err); 
    });
}
//set axios call for concerts using bands-in-town API
function movieSearch(){
    axios.get("http://www.omdbapi.com").then(
        function(response){
            console.log(response.data)
        }
    ).catch(function(error){
        if (error.response){
    
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers)
        } else if (error.request){
            console.log(error.request)
        } else {
            console.log("Error", error.massage);
        }
        console.log(error.config);
    });
    
    }

//Set axios call for movie request using OMDB API
function bandSearch(){
    axios.get("https://rest.bandsintown.com/artists/"+ search + "/events?app_id=triology&date=upcoming").then(
        function(response){
            var event = response.data;
            for (var i = 0; i < 1; i++) {
                console.log(event)

            
                console.log("Venue Name: "+ event[i].venue.name);
                console.log("Venue Location: " + event[i].venue.city + ", " + event[i].venue.country);
                console.log("Date and Time: "+moment(event[i].datetime).format("llll"))
                
            //show URL to purchase tickets
                // console.log("Purchase Ticket: "+JSON.parse(event[i].offers.url))
                // var ticket = JSON.parse(event[i].offers)
                // console.log("Purchase Ticket: "+ ticket.url)
            
            
            }
        }
    ).catch(function(error){
        if (error.response){
    
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers)
        } else if (error.request){
            console.log(error.request)
        } else {
            console.log("Error", error.massage);
        }
        console.log(error.config);
    });
    
    }

//Set axios call to connect with random.txt.
// function musicSearch(){
//     axios.get("https://api.spotify.com/v1/browse/categories/" + search + "/playlists"+spotify).then(
//         function(response){
//             console.log(response.data)
//         }
//     ).catch(function(error){
//         if (error.response){
    
//             console.log(error.response.data);
//             console.log(error.response.status);
//             console.log(error.response.headers)
//         } else if (error.request){
//             console.log(error.request)
//         } else {
//             console.log("Error", error.massage);
//         }
//         console.log(error.config);
//     });
    
//     }

//Add data to log.txt which appends the information to keep a history
function logThis (logQuery) {

    console.log(logQuery);

    fs.appendFile("log.txt", logQuery, function(err) {
        if (err) {
            return logThis("Error: " + err);
        }
    });
};


//Bonus Easter Eggs, If I have time to complete

    //Who are you?

    //Whos is your leader?

    //What is it that you do?

    //Who sent you here?

    //Take me to your leader!

    //


