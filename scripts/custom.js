
// Custom JQuery for 315chelsea.com
// © 2016 Colby Jarrell | ColbyJCreative.com
$(function(){
  console.log("ayyy");
  $('.carousel').carousel();
});

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