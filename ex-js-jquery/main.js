
// document.getElementById("test").addEventListener("click",function(){

// })
// document.addEventListener("DOMContentLoaded",function(){

// })

$(document).ready(function(){
  $("#test").click(function(){
    $("h1").html("Happy Friday!");
    boxesOut();
  });

  // first attempt at eternal fade
  // $(".box").fadeOut(6000,function(){$(".box").fadeIn(6000);});
});

function boxesIn() {
  $(".box").fadeIn(6000,boxesOut);
}
function boxesOut() {
  $(".box").fadeOut(6000,boxesIn);
}

// $("#test").on("click",function(){

// })
// $("button")