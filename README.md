# LIRI
 LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.
  1. LIRI will display your latest tweets.
  2. To retrieve the data that will power this app, you'll need to send requests to the Twitter, Spotify and IMDB APIs
# How To Use
  liri.js can take in one of the following commands:
      1. my-tweets
         Command:  node liri.js my-tweets
      2. spotify-this-song
         Command: node liri.js spotify-this-song '<song name here>'
         This will show the following information about the song in your terminal/bash window
            1. Artist(s)
            2. The song's name
            3. A preview link of the song from Spotify
            4. The album that the song is from
      3. movie-this
         Command: node liri.js movie-this '<movie name here>'
         This will output the following information to your terminal/bash window:
            1. Title of the movie.
            2. Year the movie came out.
            3. IMDB Rating of the movie.
            4. Country where the movie was produced.
            5. Language of the movie.
            6. Plot of the movie.
            7. Actors in the movie.
            8. Rotten Tomatoes Rating.
            9. Rotten Tomatoes URL.
      4. do-what-it-says
          Command: node liri.js do-what-it-says
            Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's command 
# Built With
  1. Node
  2. API
    1. Twitter
    2. Spotify
    3. IMDB
  3. JavaScript
  4. jQuery
  
# Author

  Emily Sun
