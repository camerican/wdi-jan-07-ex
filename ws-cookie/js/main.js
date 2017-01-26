// We'll have a global array of cheeses here
// every cheese should have an id matching that name
var cheeses = ["blue","gouda","camembert"];

// We could alternatively pull this information from the DOM...
// if we wanted to configure our website that way...
// var cheeses = [];
// Array.prototype.forEach.call(document.querySelectorAll(".cheese"),function(el){
//   test.push(el.id);
// });

document.addEventListener("DOMContentLoaded",function(){
  for( var i=0; i<cheeses.length; i++ ) {
    // below we're using a **closure** to preserve the state of 
    // the variables we're working with -- otherwise the for
    // loop will keep churning through and we'll lose track
    // of which element we're working with...
    // this depends on an Immediately Invoked Function Expression (IIFE)
    (function(el,name){
      // Update the cookie count
      console.log( name, Cookies.get(name) );
      // set the current value for this element's count to be the cookie val
      // (.count is the class for where we're displaying the count)
      el.querySelector(".count").innerText = ~~Cookies.get(name);
      // let's then attach our event listeners for each of the items...
      el.querySelector(".action").addEventListener("click",function(event){
        let newVal; // we'll store the new value for our cookie count here
        console.log(event.target,event.target.class );

        if( event.target.classList.contains("fa-minus") ) {
          newVal = ~~Cookies.get(name) - 1;   // subtract one if minus
        } else {
          newVal = ~~Cookies.get(name) + 1;   // or add one if plus
        }
        
        Cookies.set(name, newVal );
        // Update the HTML on the screen
        el.querySelector(".count").innerText = newVal;
      });
    })(document.getElementById(cheeses[i]),cheeses[i]); 
  }

});