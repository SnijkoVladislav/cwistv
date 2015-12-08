$.material.init();
$.material.ripples();

$(function () {
	$(".youtube").YouTubeModal({autoplay:0});
});

// $("#lessonsSlider").owlCarousel({
//     items : 2,
//     itemsDesktop : [1199,2],
//     itemsDesktopSmall : [980,2],
//     itemsTablet: [768,2],
//     itemsMobile : [600,1],

//     navigation : true,
//     pagination : false, 
//     navigationText : ["",""],    
// });

$('#theCarousel').carousel({
  interval: false
})

$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  // next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  }
  else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});