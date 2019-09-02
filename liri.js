//Set variable environment
require("dotenv").config();
var fs = require("fs");
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
case "spotify-this-song":
    musicSearch()
    break;
case "concert-this":
    bandSearch();
    break;
case "movie-this":
    movieSearch();
    break;
case "do-what-it-says": 
    do_what_it_says();
    break;
default:
    log("Sorry, that is incorrect! Self-distruct mode activated in 3...2....1.... ")
    break;
}


//Set axios call for music using spotify API
function musicSearch(){
    if (!search){
        search = "The Sign Ace of Base"
    }
        spotify.search({type: "track", query: search}).then(function(response) {
            var song = response.tracks.items
            log("Artist: " + song[0].artists[0].name + ", ")
            log("Song Name: "+ song[0].name + ", ")
            log("Song Link: "+ song[0].external_urls.spotify + ", ")
            log("Album: "+ song[0].album.name + ", ")
            }
        ).catch(function(error){
            if (error.response){
        
                log(error.response.data+ ", ");
                log(error.response.status+ ", ");
                log(error.response.headers+ ", ")
            } else if (error.request){
                log(error.request+ ", ")
            } else {
                log("Error", error.massage+ ", ");
            }
            log(error.config+ ", ");
        });
}
//set axios call for concerts using bands-in-town API
function movieSearch(){
    if(!search){
        search = "Mr. Nobody"
    }
    axios.get("http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy").then(
        function(response){
            var movie = response.data
            // log(movie)
            log("Title: " + movie.Title + ", ")
            log("Year: " + movie.Year + ", ")
            log("Rating: " + movie.imdbRating + ", ")
            log("Rotten Tomatos Rating: " + movie.Ratings[1].Value + ", ")
            log("Production Country: " + movie.Country + ", ")
            log("Language: " + movie.Language + ", ")
            log("Plot: " + movie.Plot + ", ")
            log("Actors: " + movie.Actors + ", ")
            
        }
    ).catch(function(error){
        if (error.response){
    
            log(error.response.data+ ", ");
            log(error.response.status+ ", ");
            log(error.response.headers+ ", ")
        } else if (error.request){
            log(error.request+ ", ")
        } else {
            log("Error", error.massage+ ", ");
        }
        log(error.config+ ", ");
    });
    
    }

//Set axios call for movie request using OMDB API
function bandSearch(){
    axios.get("https://rest.bandsintown.com/artists/"+ search + "/events?app_id=triology&date=upcoming").then(
        function(response){
            //establish base start point
            var event = response.data;

            for (var i = 0; i < 1; i++) {
                
                log("Venue Name: "+ event[i].venue.name + ", ");
                log("Venue Location: " + event[i].venue.city + ", " + event[i].venue.country+ ", ");
                log("Date and Time: "+moment(event[i].datetime).format("llll") + ", ")
                
            //show URL to purchase tickets
                // log("Purchase Ticket: "+JSON.parse(event[i].offers.url))
                // var ticket = JSON.parse(event[i].offers)
                // log("Purchase Ticket: "+ ticket.url)
            
            
            }
        }
    ).catch(function(error){
        if (error.response){
    
            log(error.response.data+ ", ");
            log(error.response.status+ ", ");
            log(error.response.headers+ ", ")
        } else if (error.request){
            log(error.request+ ", ")
        } else {
            log("Error", error.massage+ ", ");
        }
        log(error.config+ ", ");
    });
    
    }

// Set axios call to connect with random.txt.
function do_what_it_says(){
        fs.readFile("random.txt", "utf8", function(err, data){
            if(err){
                log(err + ", ")
            }
            var arr = data.split(",")
            search = arr[1]
            musicSearch(search)

        })
    
    
    };

//Add data to log.txt which appends the information to keep a history
function log (logQuery) {

    console.log(logQuery);

    fs.appendFile("log.txt", logQuery, function(err) {
        if (err) {
            return logThis("Error: " + err + ", ");
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


