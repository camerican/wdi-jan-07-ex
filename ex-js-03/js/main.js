//1 - declare 2 variables holding numbers... then output the sum to the console.

var variable1 = 2;
var variable2 = 54;

console.log( variable1 + variable2 )

//2 - add two strings together and output the result to console (or alert, if you follow the slides... but please nooo)

var string1 = "Hello there, ";
var string2 = "How are you today?";

// alert( string1 + string2 );
console.log( string1 + string2 );

//3 - create an object all about us... containing firstName, lastName, birthday, interests

var cam = {
  firstName:  "Cam",
  lastName:   "Crews",
  birthday:   "4/25",
  interests: [
    "soccer",
    "golf",
    "volleyball",
    "tennis",
    "javascript"
  ]
}

console.log( cam.firstName + " " + cam.lastName + " was born on " + cam.birthday );
console.log( "their interests are... " + cam.interests.toString().replace(/,/g,', ')
 )


