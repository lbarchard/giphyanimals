$(document).ready(function() {

    //Initial variables***************************************************************
    var giphyCall = new Object();

    giphyCall.APIKey = "dc6zaTOxFJmzC";
    giphyCall.searchTerm = "Cat";
    giphyCall.searchLimit = 10;
    giphyCall.rating = "r";

    var animals = ["cat", "dog", "frog", "elephant", "lion", "bear"];
    var imageList = [];
    //Functions**********************************************************
    function setGiphyCall() {
        giphyCall.URL = "https://api.giphy.com/v1/gifs/search?q=" + giphyCall.searchTerm + "&limit=" + giphyCall.searchLimit + 
                        "&rating=" + giphyCall.rating + "&api_key=" + giphyCall.APIKey;
    };

    function buildButtons() {
        $("#buttons").empty();
        for (i=0; i< animals.length; i++) {
            var animalButton = $("<button>");
            animalButton.addClass("animal");
            animalButton.addClass("btn");
            animalButton.addClass("btn-default");
            animalButton.attr("type", "button");
            animalButton.attr("data-name", animals[i]);
            animalButton.text(animals[i]);
            $("#buttons").append(animalButton);
        }
    };

    function getImages () {
        
        $.ajax({            
            url: giphyCall.URL,
            method: 'GET'
            }).done(function(response) {
                console.log(response)
                $("#images").empty();
                imageList = [];        
                for (i=0; i<response.data.length; i++) {
                    //Track ID's for each Image DIV
                    var imageDivID = "imageDiv" + i;
                    var imageID = "imageID" + i;
                    //Build the image Div
                    var imageDiv = $("<div>");
                    imageDiv.attr("id", imageDivID);
                    imageDiv.addClass("col-xs-6")
                    imageDiv.addClass("imageDiv")
                    $("#images").append(imageDiv);
                    
                    //Build the image tag
                    var animalImage = $("<img>");
                    animalImage.addClass("animalImage");
                    animalImage.attr("id", imageID);
                    animalImage.attr("src",response.data[i].images.original_still.url);
                    // animalImage.attr("height", 200);
                    animalImage.attr("value", i)
                    imageDivID = "#" + imageDivID
                    $(imageDivID).append(animalImage);
                    
                    //Build the rating tag
                    var imageRating = $("<p>");
                    imageRating.text(response.data[i].rating)
                    imageRating.addClass("imageRating");
                    $(imageDivID).append(imageRating);

                    //Build the images Object
                    imageList.push({
                        still: response.data[i].images.original_still.url,
                        animated: response.data[i].images.original.url
                    });
                }
                console.log(imageList);
        });
    };

    function addAnimal() {
        event.preventDefault();
        var animal = $("#newAnimal").val().trim();
        if (animal.length != 0) {
        animals.push(animal);
        buildButtons();
        $("#newAnimal").val("");
        }
    };

    function setSearchTerm() {
        var animal = $(this).attr("data-name");
        giphyCall.searchTerm = animal;
        setGiphyCall();
        getImages();
    };

    function setImageType() {
        var i = ($(this).attr("value"))
        var imageID = "#imageID" + i;
        if ($(imageID).attr("src") === imageList[i].still) {
            $(imageID).attr("src",imageList[i].animated);
        }
        else {
            $(imageID).attr("src",imageList[i].still);
        }
    }

    //Event listeners***************************************************************
    $(document).on("click", ".animal", setSearchTerm);

    $("#addAnimal").on("click", addAnimal);

    $(document).on("click", ".animalImage", setImageType);

    //Startup routine***************************************************************
    buildButtons ();

});
