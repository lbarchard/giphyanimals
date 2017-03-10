$(document).ready(function() {

//Initial variables
var giphyCall = new Object();

giphyCall.APIKey = "dc6zaTOxFJmzC";
giphyCall.searchTerm = "Cat";
giphyCall.searchLimit = 10;
giphyCall.rating = "pg-13";

var animalList = [cat, dog, frog, elephant, lion, bear]

function setGiphyCall() {
    giphyCall.URL = "http://api.giphy.com/v1/gifs/search?q=" + giphyCall.searchTerm + "&limit=" + giphyCall.searchLimit + 
                    "&rating=" + giphyCall.rating + "&api_key=" + giphyCall.APIKey;
}
    
setGiphyCall();

$.ajax({
    
    url: giphyCall.URL,
    method: 'GET'
    }).done(function(response) {
      console.log(response);
    });

buildButtons();
    for (i=0, )

});
