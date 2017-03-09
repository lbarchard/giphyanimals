$(document).ready(function() {

var APIKey = "dc6zaTOxFJmzC"
var searchTerm = "Cat"

giphyCall = {
    APIKey: "dc6zaTOxFJmzC",
    searchTerm: "Cat",
    searchLimit: 10,
    rating: "pg-13",
    URL: function() {
        var thisURL = "http://api.giphy.com/v1/gifs/search?q=cat&limit=10&rating=pg-13&api_key=dc6zaTOxFJmzC";
        return thisURL;
}}

// example search
// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC   
// https://github.com/Giphy/GiphyAPI#search-endpoint

// q
// limit
// rating

// When the user clicks on a button, the page should grab 10 static, non-animated gif images from 
// the GIPHY API and place them on the page.

// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks 
// the gif again, it should stop playing.

// Under every gif, display its rating (PG, G, so on).






$.ajax({
      url: giphyCall.giphyCallURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });


});
