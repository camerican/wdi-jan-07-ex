// declare a variable equal to a number
number = 1;
// var number = parseInt(prompt("Please Enter a Number"));

// var passPhrase = "open sesame";

if( number < 10 ) {
  // number < 10, say something about it
  console.log( "Number is less than 10" );
} else {
  //number >= 10, say the number and that it's greater than or equal to 10
  console.log( number + " is greater than or equal to 10");
}

// if( passPhrase === prompt( "Enter the password" ) ) {
//   console.log( "You're admitted into the secret WDI club");
// } else {
//   console.log( "Sorry about that... please try again");
// }

//////// 
// Our Second Example from the Logic Slides

// 1 - Console log a string that we receive

function logger( msg ) {
  console.log( msg );
}
logger("Hey does this work?");

// 2 - Say something

function hr() {
  console.log("-".repeat(20));
}
hr();

// 3 - door prize exercise

// if/else technique
// function prize( doorNumber ) {
//   if( doorNumber == 1) {
//     return "A new car";
//   } else if ( doorNumber == 2 ) {
//     return "$10,000";
//   } else if ( doorNumber == 3 ) {
//     return "An old shoe";
//   }
// }

// array technique
function prize( doorNumber ) {
  var prizes = ["A new car","$10,000","An old shoe"];
  return prizes[doorNumber-1] || "learning to read";
}


function pickADoor() {
  var door = parseInt(prompt("Please pick a door between 1-3"));
  console.log( "Your prize is " + prize(door));
}

pickADoor();




