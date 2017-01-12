


// document.addEventListener("DOMContentLoaded",function(){

//   document.getElementById("p1").innerText = "Lorem Ispum is so 2016";

//   setTimeout(function(){
//     document.getElementById("box1").style.backgroundColor = "#ff00ff";
//   },1000);
//     setTimeout(function(){
//     document.getElementById("box2").style.backgroundColor = "#ff00ff";
//   },2000);
//       setTimeout(function(){
//     document.getElementById("box4").style.backgroundColor = "#ff00ff";
//   },4000);
// });

 //                        argument 1    argument 2
//                         \- type - /\ - callback-/
document.addEventListener("keypress",function(event){
  console.log( "You pressed the " + event.key + " key" );
  if( event.key == ' ' ) {
    document.querySelector("h2").innerHTML += "&nbsp;";
    event.preventDefault();
  } else {
    document.querySelector("h2").innerText += event.key;
  }
  
});

document.addEventListener("DOMContentLoaded",function(){

  var menu = document.getElementById("menu");

  // setTimeout(function(){
  //   menu.style.display = "block";
  //   setTimeout(function(){
  //       menu.style.display = "none";
  //     },3000);
  // },3000);
  showMenu(3000);

  function showMenu(delay){
    delay = delay || 1;
    setTimeout(function(){
     menu.style.display = "block";
     hideMenu(delay);
    },delay);
  }
  function hideMenu(delay){
    delay = delay || 1;
    setTimeout(function(){
      menu.style.display = "none";
      showMenu(delay);
    },delay);
  }


  menu.querySelector(".close").addEventListener("click",function(){
    menu.style.display = "none";
  });

  document.getElementById("login").addEventListener("submit",function(event){
    event.preventDefault();

    var elUser = document.querySelector("input[name=username]");
    var elPass = document.querySelector("input[name=password]");

    var username = elUser.value
    if( username.includes(0) || 
        username.includes(1) ||
        username.includes(2) ||
        username.includes(3) ||
        username.includes(4) ||
        username.includes(5) ||
        username.includes(6) ||
        username.includes(7) ||
        username.includes(8) ||
        username.includes(9) ) {
      // contains a number
    }
    var fContainsNumber = false;
    for( var i=0; !fContainsNumber && i < elUser.value.length; i++ ) {
      if( "0123456789".includes(elUser.value[i]) ){
        fContainsNumber = true;
      }
    }
    // /[0-9]/
    /\d/.test(elUser.value)

  //  \D - not a digit
  //  \d - a digit
  });

  //alternatively you could write
  //  document.onkeypress = function(){}

  var boxes = document.querySelectorAll(".box");
  for( var x=0; x<boxes.length; x++ ) {
    goPurple(boxes[x],(x+1)*1000)
    if( x % 2 ) {
      boxes[x].innerHTML = "<h2>Box " + (x+1) + "</h2>";
    } 
  }

  //Select the h1
  var h1 = document.querySelector("h1");
  h1.addEventListener("click",function(event){
    // alert( h1.innerText );
    alert( event.target.innerText );
  });
  // $("h1").on("click",function(){});
  // $("h1").click(function(event){
  //   alert($(event.target).text() );
  //   console.log( event );
  // });
});

// Alfe Question

// var answer = prompt("What is a muscle building supplment");

// //if( answer === "Protein" || answer === "protein")
// if( answer.toLowerCase() === "protein" ) {



// }

function goPurple(element,delay) {
  setTimeout(function(){
    element.style.backgroundColor = "#ff00ff";
  },delay);
}





// document.getElementsByTagName("h1")[0]

// document.getElementById("box1")
// document.querySelector("#box")
// jQuery("#box")
// $("#box")

// document.querySelector("#p1")
// document.querySelector("p")
// document.querySelectorAll("#p1")[0];