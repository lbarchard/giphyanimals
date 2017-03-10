$(document).ready(function() {

//Initial variables
var giphyCall = new Object();

giphyCall.APIKey = "dc6zaTOxFJmzC";
giphyCall.searchTerm = "Cat";
giphyCall.searchLimit = 10;
giphyCall.rating = "pg-13";

var animals = ["cat", "dog", "frog", "elephant", "lion", "bear"];





function setGiphyCall() {
    giphyCall.URL = "http://api.giphy.com/v1/gifs/search?q=" + giphyCall.searchTerm + "&limit=" + giphyCall.searchLimit + 
                    "&rating=" + giphyCall.rating + "&api_key=" + giphyCall.APIKey;
}

function getImages () {
    $.ajax({
        
        url: giphyCall.URL,
        method: 'GET'
        }).done(function(response) {
            console.log(response)
            for (i=0; i<response.data.length; i++) {
                console.log("image" + i);
                console.log(response.data[i].images.downsized.url);
                console.log(response.data[i].images.downsized_still.url);
                var animalImage = $("<img>");
                animalImage.addClass("animalImage");
                animalImage.attr("src",response.data[i].images.downsized_still.url);
                animalImage.attr("height", 200)
                $("#images").prepend(animalImage);
            }
        //   var animalDiv = $("<div class='movie'>");

        //   // Storing the rating data
        //   var rating = response.Rated;

        //   // Creating an element to have the rating displayed
        //   var pOne = $("<p>").text("Rating: " + rating);

        //   // Displaying the rating
        //   movieDiv.append(pOne);

        //   // Storing the release year
        //   var released = response.Released;

        //   // Creating an element to hold the release year
        //   var pTwo = $("<p>").text("Released: " + released);

        //   // Displaying the release year
        //   movieDiv.append(pTwo);

        //   // Storing the plot
        //   var plot = response.Plot;

        //   // Creating an element to hold the plot
        //   var pThree = $("<p>").text("Plot: " + plot);

        //   // Appending the plot
        //   movieDiv.append(pThree);

        //   // Retrieving the URL for the image
        //   var imgURL = response.Poster;

        //   // Creating an element to hold the image
        //   var image = $("<img>").attr("src", imgURL);

        //   // Appending the image
        //   movieDiv.append(image);

        //   // Putting the entire movie above the previous movies
        //   $("#movies-view").prepend(movieDiv);
    });
    
}

function buildButtons() {
    $("#buttons").empty();
    for (i=0; i< animals.length; i++) {
          var animalButton = $("<button>");
          animalButton.addClass("animal");
          animalButton.attr("data-name", animals[i]);
          animalButton.text(animals[i]);
          $("#buttons").append(animalButton);
    }
}

$("#addAnimal").on("click", function(anotherAnimal) {
    event.preventDefault();
    var animal = $("#newAnimal").val().trim();
    animals.push(animal);
    buildButtons();
    $("#newAnimal").val("");
});


// -----------
$(document).on("click", ".animal", setSearchTerm);

function setSearchTerm() {
    var animal = $(this).attr("data-name");
    giphyCall.searchTerm = animal;
    setGiphyCall();
    getImages();
    console.log("Got here")
};

// -------------





setGiphyCall();

buildButtons ();



});
