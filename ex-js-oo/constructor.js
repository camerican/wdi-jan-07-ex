// Sample constructor with an attribute and a method

// Probably don't want to do this type of thing
// String.prototype.rudify = function(){
//   console.log( this.toString() + " sucks" );
// }


function University( name, founded, city ) {
  this.name = name;
  this.founded = founded;
  this.city = city;
  this.greeting = function() {
    return "Welcome to " + this.name + ", we're " + ((new Date).getYear() + 1900 - this.founded) + " years young";
  }
}

var nyu = new University("New York University",1860,"New York");
var princeton = new University("Princeton",1820,"Princeton");
