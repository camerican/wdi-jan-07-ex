


// document.addEventListener("DOMContentLoaded",function(){

//   document.getElementById("p1").innerText = "Lorem Ispum is so 2016";

//   setTimeout(function(){
//     document.getElementById("box1").style.backgroundColor = "#ff00ff";
//   },1000);
//     setTimeout(function(){
//     document.getElementById("box2").style.backgroundColor = "#ff00ff";
//   },2000);
//       setTimeout(function(){
//     document.getElementById("box4").style.backgroundColor = "#ff00ff";
//   },4000);
// });

document.addEventListener("DOMContentLoaded",function(){
  var boxes = document.querySelectorAll(".box");
  for( var x=0; x<boxes.length; x++ ) {
    goPurple(boxes[x],(x+1)*1000)
  }
});

function goPurple(element,delay) {
  setTimeout(function(){
    element.style.backgroundColor = "#ff00ff";
  },delay);
}
// document.querySelector("#p1")
// document.querySelector("p")
// document.querySelectorAll("#p1")[0];