///
var cheeses = ["blue","gouda","camembert"];



document.addEventListener("DOMContentLoaded",function(){

  //
  // var el_blue = document.getElementById("blue");
  // var el_gouda = document.getElementById("gouda");
  // var el_camembert = document.getElementById("camembert");

  // The below will dyanmically create
  // variables that are manually declared above
  for( var i=0; i<cheeses.length; i++ ) {
    var variable_name = "el_"+cheeses[i]
    window[variable_name] = document.getElementById(cheeses[i]);
    window[variable_name].querySelector(".count").innerText = ~~Cookies.get(cheeses[i]);
  }
  // sorta dangerous to do this, but shown 
  // for demo of what's possible

  el_blue.querySelector(".action").addEventListener("click",function(event){
    var newVal;
    console.log(event.target,event.target.class );
    // either subtract one
    if( /fa-minus/.test( event.target.className ) ) {
      newVal = ~~Cookies.get("blue") - 1;
    // or add one from the count
    } else {
      newVal = ~~Cookies.get("blue") + 1;
    }
      // we want to increase the count for 
      // each blue cheese we add...
     
      // Update the cookie count
      Cookies.set("blue", newVal );
      // Update the HTML on the screen
      el_blue.querySelector(".count").innerText = newVal;
  });

});

function updateItemCount(item){}