
// object literal style
var trafficLight1466 = {
  states: ["red","yellow","green"],
  green: true
}

// object constuctor style
function TrafficLight( id, isGreen ) {
  this.id = id;
  this.states = ["red","yellow","green"];
  this.green = isGreen || false;
  this.el = document.getElementById("tl_"+this.id);
  this.updateHTML = function(){
    this.turnOffAll();  // first turn off all the lights
    if( this.green ) {  // if we should be green
      this.el.querySelector(".green").classList.add("on");
    } else {            // if we should be red
      this.el.querySelector(".red").classList.add("on");
    }
  }
  this.turnOffAll = function(){
    this.el.querySelectorAll(".light").forEach(function(c){
      c.classList.remove("on");
    });
  }
  this.changeLight = function(){
    console.log("Changing light");
    this.green = !this.green;
    this.updateHTML();
  }
}
var trafficLights = [];
//Wait for DOM to load before creating our traffic lights
document.addEventListener("DOMContentLoaded",function(){
  for( var i = 0, id = 1467; i < 3; i++, id++) {
    trafficLights[i] = new TrafficLight(id,true);
  }
  // update the first light (right now the only one we have on the page)
  trafficLights[0].updateHTML();
  document.getElementById("tl_"+trafficLights[0].id).addEventListener("click",function(event){
    trafficLights[0].changeLight();
  });
})





// var trafficLight1467 = new TrafficLight(1467, true);
// var trafficLight1468 = new TrafficLight(1468, false);
// var trafficLight1469 = new TrafficLight(1469, true);

/***
// Roberts's sample code, setting up arrays of values...

function Person( height, hair, age ) {
  this.height = Person.prototype.heightOptions[height];
  this.hair = Person.prototype.hairOptions[hair];
  this.age = Person.prototype.ageOptions[age];
}
// We're modifying the Object prototype here to define ranges of values for each option
Person.prototype.heightOptions = ["6ft","5ft","7ft"];
Person.prototype.hairOptions = ["Light Brown","Black","Blonde"];
Person.prototype.ageOptions = [25,26,27,28,29,30,31,32,33,34,35];
// And then constructing a particular person with the index
// values...
var robsPerson = new Person( 1, 2, 6 );
***/
