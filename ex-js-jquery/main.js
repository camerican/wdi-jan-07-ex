
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

// $("#test").on("click",function(){

// })
// $("button")