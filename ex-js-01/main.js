
document.addEventListener("DOMContentLoaded",function(){

  var form = document.getElementById("form_add");
  form.addEventListener("submit",function(event){
    addFormVals();
    event.preventDefault();
  });
  console.log("Page is loaded");
});

function addFormVals(){
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  console.log( "num1 & num2", num1, num2 );
  document.getElementById("result").innerText = num1 + num2;
}