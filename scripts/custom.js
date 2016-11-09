
// Custom JQuery for Serentity Gardens
// © 2016 Colby Jarrell | ColbyJCreative.com
$(function(){
  console.log("ayyy");
  $('.carousel').carousel();
});

$(function(){
  $('.owl-carousel').owlCarousel();
});

// Disable Right Clicking
$(document).ready(function(){
  $('img').on("contextmenu", function(e){
    return false;
  });
});
