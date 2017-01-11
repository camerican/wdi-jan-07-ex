
document.addEventListener("DOMContentLoaded",function(){

  var form = document.getElementById("form_add");
  form.addEventListener("submit",function(event){
    addFormVals();
    event.preventDefault();
  });
  console.log("Page is loaded");
  // document.getElementsByTagName("h1")[0].innerText += " & Day 7";
  setTimeout(function(){
    document.querySelector("h1").innerText += " & Day 7";
  },1000);
  
});

// var document = {
//   querySelector: function(){
//     // do the query selector thing..
//   }
// }

function addFormVals(){
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  console.log( "num1 & num2", num1, num2 );
  document.getElementById("result").innerText = num1 + num2;
}