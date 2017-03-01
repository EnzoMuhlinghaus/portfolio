// ANIMATION CSS
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$(document).ready(function(){

    $('#intro').on('click', '#arrow-pulser', function() {
        $("html, body").animate({ scrollTop: $('#projects').offset().top }, 1000);
    });

    setTimeout(function(){
        $(".fadeInLeftBig").not("h1").removeClass("fadeInLeftBig").addClass("fadeOutRightBig");
        $("h1.fadeInDown").removeClass("fadeInDown").addClass("fadeOutUp");
        setTimeout(function(){
            $("h1#enzo").show().animateCss("bounceInUp");
            setTimeout(function(){
                $("span#clickme").show().animateCss("lightSpeedIn");
                setTimeout(function(){
                    $("span#clickme").removeClass("lightSpeedIn").addClass("animated pulse infinite");
                }, 500);
            }, 1000);
        }, 500);
    }, 3500);

    $(".click-me-div").click(function () {
        $(".click-me-div").addClass("animated flipOutY");
        setTimeout(function(){
            $('.top-bar').show().animateCss("fadeInRight");
            $('#title').show().animateCss("fadeInDown");
            setTimeout(function(){
                $('.bio p:nth-child(1)').show().animateCss("fadeInLeft");
                setTimeout(function(){
                    $('.bio p:nth-child(2)').show().animateCss("fadeInRight");
                    setTimeout(function(){
                        $('.bio p:nth-child(3)').show().animateCss("fadeInLeft");
                        $('#arrow-pulser').fadeIn();
                        $("body").css("position", "static");

                        //Lancement de la one page scroll
                        $(".main").onepage_scroll({
                            sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
                            easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                                             // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
                            animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
                            pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
                            updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
                            beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
                            afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
                            loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
                            keyboard: true,                  // You can activate the keyboard controls
                            responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                            // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                            // the browser's width is less than 600, the fallback will kick in.
                            direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
                        });


                    },500);
                },500);
            },500);

        }, 1000);

    })
});