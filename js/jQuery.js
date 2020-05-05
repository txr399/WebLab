$(document).ready(function(){

  console.log("hello world!");

  $("main .about").hide();
  $("main .resume").hide();
  $("main .board").hide();
  $("main .socials").hide();
  $("main .graphics").hide();
  $("main .homepage").show();


$("nav ul li:first-child").click(function(){
  $("main .about").show();
  $("main .resume").hide();
  $("main .board").hide();
  $("main .socials").hide();
  $("main .graphics").hide();
  $("main .homepage").hide();
});

$("nav ul li:nth-child(2)").click(function(){
  $("main .about").hide();
  $("main .resume").show();
  $("main .board").hide();
  $("main .socials").hide();
  $("main .graphics").hide();
  $("main .homepage").hide();
});

$("nav ul li:nth-child(3)").click(function(){
  $("main .about").hide();
  $("main .resume").hide();
  $("main .board").show();
  $("main .socials").hide();
  $("main .graphics").hide();
  $("main .homepage").hide();
});
$("nav ul li:nth-child(5)").click(function(){
  $("main .about").hide();
  $("main .resume").hide();
  $("main .board").hide();
  $("main .socials").show();
  $("main .graphics").hide();
  $("main .homepage").hide();
});
$("nav ul li:nth-child(4)").click(function(){
  $("main .about").hide();
  $("main .resume").hide();
  $("main .board").hide();
  $("main .socials").hide();
  $("main .graphics").show();
  $("main .homepage").hide();
});


});
