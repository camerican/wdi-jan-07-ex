// wait for DOM to load...
$(document).ready(function(){
  $("#search").keyup(function(event){
    var elInput = $("#search");    // input element for search request
    var elResults = $("#results"); // area to output the results
    // only search if we have at least 3 characters...
    if( elInput.val().length >= 3 ){
      $.ajax({
        url: "http://omdbapi.com",
        data: {
          s: elInput.val()
        },
        success: function(data) {
          // reset the results area...
          // if we got new results
          if( data.Search.length ) {
            elResults.html("");
            data.Search.forEach(function(movie){
             //traditional javascript concatenation of strings and values...
             elResults.append("<div class=\"movie\"><h3>" + movie.Title + "</h3><h4>" + movie.Year + "</h4><img src=\"" + movie.Poster + "\"</div>");
             // use of ES6 template string:
             // template strings are declared within backtics and allow
             // you to interpolate variables via ${myVariableHere}
             // elResults.append(`<div class="movie"><h3>${movie.Title}</h3><h4>${movie.Year}</h4><img src="${movie.Poster}"</div>`);
            });
          }
          
          console.log(data);
        }
      });
    }

    $("#results").append("<li>"+event.key+"</li>");
  });
});