var request = require("request");
require("dotenv").config();

  var spotify = new Spotify(keys.spotify);
  var client = new Twitter(keys.twitter);

  var apiKey = 'Ts06BL5bpPWQhYOeSy9u2QFgN';
var options = {
  provider: 'twitter',
  
  httpAdapter: 'https', // Default
  apiKey: apiKey,
};
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <b90f602a84d9410a9593ed5f83e2a1a6>,
  secret: <3973a8213d7b45abb9d9750cdaec9afa>
});
 
spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });
  // run a request to spotify

  song = encodeURI(process.argv[2])

  var query = song;

  console.log(query);

  request(query, function(error, response, body){
  	if (!error && response.statusCode === 200){
  		console.log(JSON.parse(body).Year);
  	}
  })
  // store variables here

  