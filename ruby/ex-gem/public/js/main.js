//document.addEventListener("DOMContentLoaded",function(){})
$(document).ready(function(){
  $("form").submit(function(event){
    $.ajax({
      dataType: "json",
      url: "/locate/" + $("#web_address").val(),
      method: "get",
      // # to do: fix the json formatting
      complete: function(response){
        
        data = JSON.parse(response.responseText);
        console.log(data, data.region_name);
        $("h2").html( data.region_name );
        $("h3").html( data.ip );
      }
    });
    event.preventDefault();
  });
});