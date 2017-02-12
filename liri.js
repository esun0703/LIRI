// NPM packages
const fs = require("fs");
const Twitter = require("twitter");
const Spotify = require("spotify");
// const TMDB = require('tmdb').init({apikey: ''})
// // const inquirer = require("inquirer");
const Request = require("request");
//grab keys
const keys = require("./keys.js");


//commands

var action = process.argv[2];
var songValue = process.argv.slice(3).join(' ');

if (songValue.length === 0)
    songValue = "The Sign";

var movieValue = process.argv.slice(3).join(' ');

if (movieValue.length === 0)
    movieValue = "Mr. Nobody";


if (action==="my-tweets"){
	myTweets();
}else if(action==="spotify-this-song"){
	spotifySong(songValue);
} else if (action==="movie-this"){
	movieThis(movieValue);
} else if(action==="do-what-it-says"){
	doWhatItSays();
};


function myTweets(){
	var twitterKeys = keys.twitterKeys;
	var client = new Twitter ({
		consumer_key: twitterKeys.consumer_key,
		consumer_secret: twitterKeys.consumer_secret,
		access_token_key: twitterKeys.access_token_key,
		access_token_secret: twitterKeys.access_token_secret
	});
	var twitterID = "EmilySun2";
	var twitterURL = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=" + twitterID + "&count=20";
	client.get(twitterURL, function(error, tweets, response) {
 		if (!error) {
 			console.log("Your Last 20 Tweets:");
    		for(let i = 0; i < tweets.length; i++) {
    			console.log("===============================================================");
            	console.log([i] + " Tweet: " + tweets[i].text + " " + tweets[i].created_at);
            };
        };
    });
};
//Not creating 20??

 

function spotifySong(songValue){
	// song = value || "The Sign"
	Spotify.search({ 
		type: 'track',
		query: songValue 
	}, function(err, data) {
		if(!err){
			for (var i = 0; i < 5; i++) {
                if (data.tracks.items[i] != undefined) {
	                	console.log("===============================================================")
	                	console.log(i + ".")
	                    console.log('Artist: ' + data.tracks.items[i].artists[0].name); //Artist name
	                    console.log('Song: ' + data.tracks.items[i].name); //song name
	                    console.log('Preview Url: ' + data.tracks.items[i].preview_url) //Preview URL
	                    console.log('Album: ' + data.tracks.items[i].album.name); 
	                    console.log("===============================================================")
				} 
			}
		}     
	});
}


function movieThis(movieValue){

	console.log("I am in OMDB");
	// if(!movie){
		// 	Request("http://www.omdbapi.com/?t=" + value + "&y=&plot=short&r=json&tomatoes=true", function(error, response, body) {
		//   // If there were no errors and the response code was 200 (i.e. the request was successful)...
		// 	if (!error && response.statusCode === 200) {

		// 	    // Then we print out the imdbRating
		// 	    console.log("The movie title is: " + JSON.parse(body).Title);
		// 	    console.log("The movie year is: " + JSON.parse(body).year);
		// 	    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
		// 	  	console.log("The movie country is: " + JSON.parse(body).Country);
		// 	  	console.log("The movie language is: " + JSON.parse(body).Language);
		// 	  	console.log("The movie plot is: " + JSON.parse(body).Plot);
		// 	  	console.log("The movie actors are: " + JSON.parse(body).Actors);
		// 	  	console.log("Rotten Tomatoes Rating: " + JSON.parse(body).metascore);
		// 	  	console.log("Rotten Tomatoes URL: " + JSON.parse(body).imdbRating);
		//   	}
		// });
	// }
	
	    console.log(movieValue);
	
		Request("http://www.omdbapi.com/?t=" + movieValue + "&y=&plot=short&r=json&tomatoes=true", function(error, response, body) {
		 console.log(movieValue);
		  // If there were no errors and the response code was 200 (i.e. the request was successful)...
			if (!error && response.statusCode === 200) {

			    // Then we print out the imdbRating
			    console.log("The movie title is: " + JSON.parse(body).Title);
			    console.log("The movie year is: " + JSON.parse(body).year);
			    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
			  	console.log("The movie country is: " + JSON.parse(body).Country);
			  	console.log("The movie language is: " + JSON.parse(body).Language);
			  	console.log("The movie plot is: " + JSON.parse(body).Plot);
			  	console.log("The movie actors are: " + JSON.parse(body).Actors);
			  	console.log("Rotten Tomatoes Rating: " + JSON.parse(body).metascore);
			  	console.log("Rotten Tomatoes URL: " + JSON.parse(body).imdbRating);
		  	}
		});
	
}

function doWhatItSays(){
	fs.readFile("random.txt", "utf8", function(err,data){
		var splitData = data.split(",");
		console.log(splitData);
		value = splitData[1];
		spotifySong(value);
	})
}