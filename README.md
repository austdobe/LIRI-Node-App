# LIRI-Node-App

A custom made LIRI assistant using node.js. Liri is here to help you gather information pretaining to concerts, music and movies. Liri is connected to three different API's to help gather the information. The API's are bandsintown, spotify, and omdb. You can access the API's using the following commands:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`

concert-this needs to be used in the following format: 
node liri.js concert-this <enter_your_artist_or_band_here>
*This will search for the next upcoming concert for the band or artist searched for. It will show where and when it is taking place.*

spotify-this-song needs to be used in the following format: 
node liri.js spotify-this-song <enter_your_song_here>
*This will search for the song you have entered. It will give you background information pretaining to the song such as artist, album and a link to listen to the song on spotify*

movie-this needs to be used in the following format: 
node liri.js movie-this <enter_your_movie_here>
*This will search for the movie you have entered. It will give you background information pretaining to the movie such as the actors, when it was made, and what the ratings were for the movie*

do-what-it-says needs to be used in the following format: 
node liri.js do-what-it-
*Do what is says is alittle different from the rest. This one has a predefined search within a text file. This is taking the text file and seperating the array within into usable search criteria. The text in the file is a song so this uses spotify to complete the search*

Future features will be "easter eggs" Liri will have a predetermined phrase to answer a question you have asked, or a comment you have made.


## Demo

![Liri-Node Demo](liriDemo.gif)