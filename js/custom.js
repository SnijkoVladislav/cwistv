"use strict";

/*** init animation offset top = 0 ***/
var onScrollInit = function( items, trigger ) {
    items.each( function() {
        var osElement = $(this),
            osAnimationClass = osElement.attr('data-animation'),
            osAnimationDelay = osElement.attr('data-animation-delay');

        var osTrigger = ( trigger ) ? trigger : osElement;

        osElement.css({
            '-webkit-animation-delay':  osAnimationDelay,
            '-moz-animation-delay':     osAnimationDelay,
            'animation-delay':          osAnimationDelay
        });

        new Waypoint({
            element: osTrigger.get(0),
            handler: function(direction) {
                if (direction === 'down') {
                    osElement.addClass('animated').addClass(osAnimationClass);
                }
                else {
                    osElement.removeClass('animated').removeClass(osAnimationClass);
                }
            },
            triggerOnce: true,
            offset: '110%'
        });

    });
};

/*** menuHeader ***/
var menuHeader = function() {
         var $navBar =  $('.js-navbar-top'),

        // get header height (without border)
         getHeaderHeight = $navBar.outerHeight(),

        // border height value (make sure to be the same as in your css)
        borderAmount = 2,

        // shadow radius number (make sure to be the same as in your css)
        shadowAmount = 200,

        // init variable for last scroll position
        lastScrollPosition = 0;

        // set negative top position to create the animated header effect
        $navBar.css('top', '-' + (getHeaderHeight + shadowAmount + borderAmount) + 'px');

        $(window).scroll(function() {
            var currentScrollPosition = $(window).scrollTop();
            //if (currentScrollPosition ) {
            //    $navBar.css('top', 0)
            //}

            if ($(window).scrollTop() > 2 * (getHeaderHeight + shadowAmount + borderAmount) ) {

                $('body').addClass('scrollActive').css('padding-top', getHeaderHeight);
                $navBar.css('top', 0).addClass('show-menu');

                if (currentScrollPosition < lastScrollPosition) {
                    $navBar.css('top', '-' + (getHeaderHeight + shadowAmount + borderAmount) + 'px').removeClass('show-menu')
                }


                lastScrollPosition = currentScrollPosition;

            } else {
                $('body').removeClass('scrollActive').css('padding-top', 0);
            }
        });

};


/*** init ***/
$(document).ready(function(){


        // Match to Bootstraps data-toggle for the modal
        // and attach an onclick event handler
        $('a[data-toggle="modal"]').on('click', function(e) {

            // From the clicked element, get the data-target arrtibute
            // which BS3 uses to determine the target modal
            var target_modal = $(e.currentTarget).data('target');
            // also get the remote content's URL
            var remote_content = e.currentTarget.href;

            // Find the target modal in the DOM
            var modal = $(target_modal);
            // Find the modal's <div class="modal-body"> so we can populate it
            var modalBody = $(target_modal + ' .modal-body');

            var title = $(e.currentTarget).data('whatever'); // Button that triggered the modal


            var modalClass = $(e.currentTarget).data('modal-class');
            var modalTitle = $(target_modal + ' .modal-title').text(title);

            $(target_modal).removeAttr('class').addClass('modal '+modalClass);


            // Capture BS3's show.bs.modal which is fires
            // immediately when, you guessed it, the show instance method
            // for the modal is called
            modal.on('show.bs.modal', function () {
                // use your remote content URL to load the modal body

                modalBody.load(remote_content);
            }).modal();
            // and show the modal

            // Now return a false (negating the link action) to prevent Bootstrap's JS 3.1.1
            // from throwing a 'preventDefault' error due to us overriding the anchor usage.
            return false;
        });

    //menu animation
    menuHeader();

    //animation on scroll
    onScrollInit( $('.animate-on'));

    //reviews carousel
    $('.carousel#project').carousel({
        interval: 0
    });



});