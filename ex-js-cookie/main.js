
document.addEventListener("DOMContentLoaded",function(){

  // Welcome the person if cookie name is set
  if( Cookies.get("user") ) {
    document.querySelector("h1").innerText = Cookies.get("user");
    // document.getElementsByTagName("h1")[0]
  }

  document.getElementById("reset").addEventListener("click",function(){
    Cookies.expire("user");
    document.querySelector("h1").innerText = "Cookies Test";
    // document.cookie = "";
  });

  // document.querySelector("#welcome")
  document.getElementById("welcome").addEventListener("submit",function(event){
    event.preventDefault();
    // we want to save the input value to our coookie... whenever the form is submitted.
    Cookies.set("user",document.getElementById("name").value);
    document.querySelector("h1").innerText = Cookies.get("user");
  });
});



