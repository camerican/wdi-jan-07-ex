
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
//.ajax test
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
    console.log( data );
  }
})

// $("#test").on("click",function(){

// })
// $("button")