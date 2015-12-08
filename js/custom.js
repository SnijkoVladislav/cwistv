$.material.init();
$.material.ripples();

$("#lessonsSlider").owlCarousel({
    items : 2,
    itemsDesktop : [1199,2],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,2],
    itemsMobile : [600,1],

    navigation : true,
    pagination : false, 
    navigationText : ["",""],    
});
