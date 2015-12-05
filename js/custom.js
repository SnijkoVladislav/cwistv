angular.module('cwist', ["ngMaterial"])
.controller('AppCtrl', function($scope) {});


$("#lessonsSlider").owlCarousel({
    items : 2,
    navigation : true,
    pagination : false, 
    navigationText : ["",""],    
});
