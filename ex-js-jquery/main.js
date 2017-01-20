
// document.getElementById("test").addEventListener("click",function(){

// })
// document.addEventListener("DOMContentLoaded",function(){

// })

$(document).ready(function(){
  $("#test").click(function(){
    $("h1").html("Happy Friday!");
    for(var i = 0; i<$(".box").length; i++){
      boxesOut($(".box")[i]);
    }
  });

  // first attempt at eternal fade
  // $(".box").fadeOut(6000,function(){$(".box").fadeIn(6000);});
});
var boxIn = 1, boxOut = 1;
function boxesIn(el) {
  console.log("insideBoxes in " + boxIn++);
  $(el).slideUp(3000,function(){
    boxesOut(el)
  });
}
function boxesOut(el) {
  console.log("insideBoxes Out" + boxOut++);
  $(el).slideDown(3000,function(){
    boxesIn(el);
  });
}
// //.ajax test
// $.ajax({
//   type: "GET",
//   url: "https://api.spotify.com/v1/search",
//   data: {
//     type: "artist",
//     q: "Taylor Swift"
//   },
//   success: function(data){
//     console.log(data);
//     for(var i=0; i<data.artists.items.length; i++){
//       document.getElementById("results").innerHTML += "<li>" + data.artists.items[i].name + "</li>";
//     }
//   }
// })

$.ajax({
  type: "GET",
  url: "http://art-share.herokuapp.com/api/v1/users/",
  success: function(data) {
    // console.log( data );
    // for(var i=0; i < data.result.length; i++ ) {
    //   document.getElementById("results").innerHTML += "<li>" + data.result[i].fname + " " + data.result[i].lname + "(" + data.result[i].email + ")</li>";
    // }
    data.result.forEach(function(result){
      document.getElementById("results").innerHTML += "<li>" + result.fname + " " + result.lname + "(" + result.email + ")</li>";
    });
  }
});

// Our fun error message....
// $.ajax({
//   url: "http://nycda.com",
//   type: "GET",
//   success: function(happyfriday){
//     console.log( happyfriday );
//   }
// })

// This ajax is the same as getJSON
// $.ajax({
//   url: "http://omdbapi.com",
//   data: {t: "Sharknado"},
//   success: function(data){
//     console.log(data);
//   }
// });

$.getJSON("http://omdbapi.com",{
  t: "Sharknado"
},function(data){
  console.log(data);
  // document.getElementById("movie-title").innerHTML = "something"
  $("#movie-title").html(data.Title).fadeIn(2000);
  $("#movie-poster").attr("src",data.Poster).fadeIn(3000);
  // document.getElementById("movie-poster").src = data.Poster;
  // $("#movie-title,#movie-poster").fadeIn(2000);
});

$.ajax({
   url: "https://api.spotify.com/v1/artists/3j0kMFxXTTYsuw1twLClw3/top-tracks",
   data: {
     country: "AU",
   },
   success: function(data){
     console.log(data);
     // just setting a global variable so we can
     // look at the results in the console...
     our_songs = data.tracks.map(function(song){
       return song.preview_url;
     });
     // ES6 syntax
     our_songs = data.tracks.map( song => song.preview_url);
   }
})

 append( "<p>" + mydata + "</p> <img src=\"" + response.Search[i].Poster + "\">" )
 append( `<p>${mydata}</p> <img src="${response.Search[i].Poster}">`);


// $("#test").on("click",function(){

// })
// $("button")