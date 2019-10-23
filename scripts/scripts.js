$(document).ready(function(){
  $("#order").submit(function() {
    var productOption = $("#product").val();
    $("#test").text(productOption);
    
    event.preventDefault();
  });
});
