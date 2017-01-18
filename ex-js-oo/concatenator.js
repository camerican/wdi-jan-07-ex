// Concatenator is intended to be similar to the Multiplier task from
// the first part of the Workshop.  Here we are defining a Constructor
// for an object we're calling Concatenator...  it will provide a method
// called "concat" which will add on any string we give it to the value
// it's keeping track of..   We'll keep track of the growing string
// in the instance variable called "value".
function Concatenator(){
  // this.value will store the current value of the string we want to track
  this.value = "";    // when we construct a new Concatenator object
                      // we start with an empty string

  // this.concat is an instance method that will take a string value (newString)
  // and concatenate it on to the this.value that we're tracking...
  // it will also return a value from this.getValue
  this.concat = function(newString) {
    this.value += " " + newString;
    return this.getValue();
  }

  // this.getValue just returns the current state of the string we're tracking
  // we decided to encapsulate it in <<quotes>>, though we could format it 
  // however we wish
  this.getValue = function(){
    return "<<" + this.value + ">>";
  }
}