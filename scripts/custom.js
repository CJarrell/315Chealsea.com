
// Custom JQuery for 315chelsea.com
// © 2016 Colby Jarrell | ColbyJCreative.com
// global $:false 
// global window: false 
// Init Cocoen Slider
$(function(){
  $('.carousel').carousel();
});
// Owl carousel
$(function(){
  $('.owl-carousel').owlCarousel();
});
// Disable Right Clicking
// $(document).ready(function(){
//   $('img').on("contextmenu", function(e){
//     return false;
//   });
// });
// Animated Scrolling
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
/* custom settings */
$(function(){
  $('.venobox').venobox({
    framewidth: '800px',        // default: ''
    border: '3px',             // default: '0'
    bgcolor: '#ffffff',         // default: '#fff'
    numeratio: true,            // default: false
    infinigall: true            // default: false
  });
});
// Specs Modal
$(function(){
  $('#specs-button').on('click', function(){   
    $('#specsModal').modal('show');
  });
});

