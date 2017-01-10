// declare a variable equal to a number
var number = parseInt(prompt("Please Enter a Number"));

var passPhrase = "open sesame";

if( number < 10 ) {
  // number < 10, say something about it
  console.log( "Number is less than 10" );
} else {
  //number >= 10, say the number and that it's greater than or equal to 10
  console.log( number + " is greater than or equal to 10");
}

if( passPhrase === prompt( "Enter the password" ) ) {
  console.log( "You're admitted into the secret WDI club");
} else {
  console.log( "Sorry about that... please try again");
}

