// This is how you start your js file

$(document).ready(function(){  //Beginning of your document

  // This will hide your html elements when your page loads
  $("main .mk").hide();
  $("main .ep").hide();
  $("main .hs").hide();
  $("main .ak").hide();
  $("main .re").hide();
  $("main .ov").show();

// Find this id // when click run this function
  $("#tink").click(function(){
  // Find the id body
        $("#Body").addClass("dark", true);
        $("#Body").removeClass("light", false);
});


///           MENU          ////

$("nav ul li:first-child").click(function(){
  $("main .mk").show();
  $("main .ep").hide();
  $("main .hs").hide();
  $("main .ak").hide();
  $("main .re").hide();
  $("main .ov").hide();
});

$("nav ul li:nth-child(2)").click(function(){
  $("main .mk").hide();
  $("main .ep").show();
  $("main .hs").hide();
  $("main .ak").hide();
  $("main .re").hide();
  $("main .ov").hide();
});

$("nav ul li:nth-child(3)").click(function(){
  $("main .mk").hide();
  $("main .ep").hide();
  $("main .hs").show();
  $("main .ak").hide();
  $("main .re").hide();
  $("main .ov").hide();
});
$("nav ul li:nth-child(4)").click(function(){
  $("main .mk").hide();
  $("main .ep").hide();
  $("main .hs").hide();
  $("main .ak").show();
  $("main .re").hide();
  $("main .ov").hide();
});
$("nav ul li:nth-child(5)").click(function(){
  $("main .mk").hide();
  $("main .ep").hide();
  $("main .hs").hide();
  $("main .ak").hide();
  $("main .re").show();
  $("main .ov").hide();
});



$("#tink").mouseover(function() {
  $("footer p").html("Click Me!");
});

$("#tink").mouseover(function() {
  $("footer p").css("color", "white");
});

$("#tink").mouseover(function() {
  $("footer img").attr("src", "IMG/tinkerbell.png");
});







});  //end of your document
