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
            $('jet').remove();
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
                    },500);
                },500);
            },500);

        }, 1000);

    })
});