
// object literal style
var trafficLight1466 = {
  states: ["red","yellow","green"],
  green: true
}

// object constuctor style
function TrafficLight( isGreen ) {
  this.states = ["red","yellow","green"];
  this.green = isGreen || false;
}
var trafficLight1467 = new TrafficLight(true);


