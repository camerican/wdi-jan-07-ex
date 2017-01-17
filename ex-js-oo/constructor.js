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

// adding an attribute
University.prototype.public = true;
// add a method
University.prototype.isPublic = function() {
  return this.public;
}

var princeton = new University("Princeton",1820,"Princeton");
princeton.isPublic();


// name, year of birth
function Person( name, yob ) {
  this.name = name;
  this.year = yob;
}
// lawsuits, other params
function President( lawsuits ) {
  this.great = true;
  this.lawsuits = lawsuits;
  // pass along all variables after lawsuits
  Person.apply(this,Array.prototype.slice.call(arguments,1));
}
// President.prototype = new Person;

var cam = new Person( "Cam", 1981 ); 
var trump = new President( 45, "Don", 1960 );



