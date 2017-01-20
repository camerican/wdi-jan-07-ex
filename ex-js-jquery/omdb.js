// wait for DOM to load...
$(document).ready(function(){
  $("#search").keyup(function(event){
    $("#results").append("<li>"+event.key+"</li>");
  });
});