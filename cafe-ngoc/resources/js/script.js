// jQuery

// MINIFY HERE: https://www.minifier.org/

// Use ready() to make a function available after the document is loaded
$(document).ready(function() {

    // sticky plugin waypoint
    // use direction to decide if user is scrolling up or down
    $(".js--section-features").waypoint(function(direction) {
        // if user scrolls down/up the section
        if (direction == "down") {
            // add class sticky to the <nav> if user scrolls down
            $("nav").addClass("sticky");
        } else {
            // remove class sticky if user scrolls up
            $("nav").removeClass("sticky");
        }
    }, {
        // start 60px sooner
        offset: "60px"
    });

    // scroll on buttons
    // select the class and click
    // white logo
    $(".js--header-reload").click(function() {
        location.reload();
    });

    // scroll to top btn
    $(".js--scroll-to-header2").click(function() {
        // html animation
        $("html, body").animate({scrollTop: $(".js--section-header").offset().top}, 1000);
    });

    // black logo/home btn
    $(".js--scroll-to-header").click(function() {
        // html animation
        $("html, body").animate({scrollTop: $(".js--section-header").offset().top}, 1000);
    });

    // im hungry btn
    $(".js--scroll-to-plan").click(function() {
        // html animation
        $("html, body").animate({scrollTop: $(".js--section-plans").offset().top}, 1000);
    });

    // show me more btn
    $(".js--scroll-to-start").click(function() {
        // html animation
        $("html, body").animate({scrollTop: $(".js--section-features").offset().top}, 1000);
    });


    // navigation scroll
    // https://css-tricks.com/snippets/jquery/smooth-scrolling/
    // Select all links with hashes
    $("a[href*='#']")
    // Remove links that don"t actually link to anything
    .not("[href='#']")
    .not("[href='#0']")
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate({
            scrollTop: target.offset().top
            // timer
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr("tabindex","-1"); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });

    // animations on scroll
    $(".js--wp-1").waypoint(function(direction) {
        $(".js--wp-1").addClass("animate__animated animate__fadeIn");
    }, {
        // start sooner
        offset: "50%"
    });

    // phone image
    $(".js--wp-2").waypoint(function(direction) {
        $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
    }, {
        // start sooner
        offset: "50%"
    });

    // cities
    $(".js--wp-3").waypoint(function(direction) {
        $(".js--wp-3").addClass("animate__animated animate__fadeIn");
    }, {
        // start sooner
        offset: "50%"
    });

    // pricing plan
    $(".js--wp-4").waypoint(function(direction) {
        $(".js--wp-4").addClass("animate__animated animate__pulse");
    }, {
        // start sooner
        offset: "50%"
    });

    // back to top
    $(".js--wp-5").waypoint(function(direction) {
        $(".js--wp-5").addClass("animate__animated animate__fadeIn");
    }, {
        // start sooner
        offset: "50%"
    });

    // hamburger nav
    // click function
    $(".js--nav-icon").click(function() {
        // var for easy use
        var nav = $(".js--main-nav");
        var icon = $(".js--nav-icon i");

        // toggle speed
        nav.slideToggle(200);

        // if var icon has the class then do:
        if (icon.hasClass("ion-navicon")) {
            // add and remove
            icon.addClass("ion-android-close");
            icon.removeClass("ion-navicon");
        } else {
            icon.addClass("ion-navicon");
            icon.removeClass("ion-android-close");
        }
        
    });

});