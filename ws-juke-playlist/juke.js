

document.addEventListener("DOMContentLoaded",function(){
  document.querySelector("#playlist").addEventListener("click",function(event){
      document.getElementById("jukebox").src = event.target.getAttribute("data-song");
  })
})