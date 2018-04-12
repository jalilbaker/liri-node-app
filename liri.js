var keys = require ('./keys.js');
var Twitter = require('twitter');
var spotify = require('spotify');
 var getMyTweets = function(){
    var client = new Twitter(keys.twitterKeys);
 
var params = {screen_name: 'jalil_L'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
    for (i=0;i<tweets.length;i++){
        console.log(tweets[i].created_at);
        console.log(' ');
        console.log(tweets[i].text);
    }
  }
});
}
 var getMeSpotify = function(songName) {
spotify.search({ type: 'track', query: 'songName' }, 
    function(err, data) {
     if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    console.log(data.tracks.items[0]);
});
 }
var pick = function(caseData, functionData){
    switch(caseData) {
        case 'my-tweets' :
        getMyTweets();
        break;
        case 'spotify-this-song':
        getMeSpotify(functionData);
        break;
        case "movie-this":
      getMeMovie(functionData);
      break;

        default:
        
        console.log('LIRI dose not know that')
    }
}
var getMeMovie = function(movieName) {
    if (movieName === undefined) {
      movieName = "Mr Nobody";
    }
  
    var urlHit = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";
  
    request(urlHit, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var jsonData = JSON.parse(body);
  
        console.log("Title: " + jsonData.Title);
        console.log("Year: " + jsonData.Year);
        console.log("Rated: " + jsonData.Rated);
        console.log("IMDB Rating: " + jsonData.imdbRating);
        console.log("Country: " + jsonData.Country);
        console.log("Language: " + jsonData.Language);
        console.log("Plot: " + jsonData.Plot);
        console.log("Actors: " + jsonData.Actors);
        console.log("Rotton Tomatoes Rating: " + jsonData.Ratings[1].Value);
      }
    });
  };
  
var runthis = function(argOne, argTwo){
    pick(argOne, argTwo);
};
runthis(process.argv[2], process.argv[3]);