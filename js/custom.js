angular.module('cwist', ["ngMaterial", "ngDialog"])
.controller('openVideo', function ($scope, $log, ngDialog) {});

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
