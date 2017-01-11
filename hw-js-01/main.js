//6 - declare function that takes name as argument
function identifyPerson(name) {
  console.log( "You entered " + name );
  // ES6 template string
  // console.log( `You entered #{name}`);
}
// invoke/call the function

identifyPerson("Cam");
// identifyPerson(prompt("Please enter your name"));

// 7 = declare function that takes no arguments, prints something to console

function hr() {
  console.log( "=-".repeat(20) );
}

// 8 - declare function to handle the virtual doors

function doorGame(prizes){
  var door = parseInt(prompt("Please pick a door"));
  if( !prizes[door-1] ) {
    alert("Door does not exist, try again");
    doorGame(prizes);
  } else {
    alert("Congrats, you just won " + prizes[door-1])
  }
  return prizes[door-1];
} 
var prizes = ["An NYC Apartment","A Playstation 4 Pro", "A rotten fish"];
doorGame(prizes);
// // anonymous function
// function(){
//   return 1;
// }

// // ES6 notation
// () => 1