/*------------------------------------*\
  Animation CSS
\*------------------------------------*/
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

Pace.on("hide", function () {
    $("#hi").show().animateCss("fadeInDown");
    setTimeout(function(){
        $("#hi").removeClass("fadeInDown").addClass("animated fadeOutUp").fadeOut(500);
        setTimeout(function(){
            $("#welcome, #sign").fadeIn();
            setTimeout(function(){
                $('.top-bar').show().animateCss("fadeInRight");
                $('#arrow-pulser').show().animateCss("fadeInDown");
                $('section.page1').show();
                $('section.page2').show();
                //Lancement de la one page scroll
                $(".main").onepage_scroll({
                    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
                    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                                     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
                    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
                    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
                    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
                    beforeMove: function (index) {
                    },  // This option accepts a callback function. The function will be called before the page moves.
                    afterMove: function (index) {
                    },   // This option accepts a callback function. The function will be called after the page moves.
                    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
                    keyboard: true,                  // You can activate the keyboard controls
                    responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                    // the browser's width is less than 600, the fallback will kick in.
                    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
                });
                $('.onepage-pagination').show().animateCss("fadeInRight");
                setTimeout(function () {
                    $('.ribbon-wrap').fadeIn("slow");
                }, 500)
            }, 1500);
        }, 1000);
    }, 2500);
});

$(document).ready(function(){

    $('#arrow-pulser').on('click', function() {
        $(".main").moveDown();
    });

    $('.skill-bar').each(function() {
        $(this).css({
            width: $(this).html()
        });
    });

    $(document).on("keydown", function (e) {
        if(e.key == "ArrowDown" || e.key == "ArrowUp"){
            var ribbon = $('.ribbon-wrap');
            ribbon.animateCss("rollOut");
            ribbon.fadeOut();
        }
    });

    // $('.scroll-text').delay(100),
    //     function(){
    //         $('.scroll-text .up').css('display','block');
    //         }, 1000, function() {
    //             $('.scroll-text .up').animate({
    //                 'opacity': '1'
    //             }, 1000, function() {
    //                 $('.scroll-text .down').css('display','block');
    //             });
    //             $('#affiches .cont').delay(1100).animate({
    //                 'left': '0px'
    //             }, 1000, function() {
    //                 $('.scroll-text .down').css('display','none');
    //                 $('.scroll-text').animate({
    //                     'opacity': '0'
    //                 }, 1000, function() {
    //                     $('.scroll-text').css('display','none');
    //                 });
    //             });
    //         });
    //     }
    // );

});