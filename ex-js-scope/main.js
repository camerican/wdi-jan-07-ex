
var bestNFLTeam = "Patriots";

function camsWorld(){
  var bestNFLTeam = "Steelers";
  console.log("The Best Team is the " + bestNFLTeam);
}

function robertsWorld() {
  bestNFLTeam = "Bills";
  console.log("The Best Team is the " + bestNFLTeam);
}

function reality(){
  console.log("The Best Team is the " + bestNFLTeam);
}

// Block Scope
var magicNumber = 3;

function lotto() {
  if(true) {
    let magicNumber = 7;
    console.log( "inside the block within lotto", magicNumber);
  }
  console.log( "inside lotto, after the block", magicNumber );
}
lotto();
console.log("Outside function", magicNumber);





