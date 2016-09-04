
$(document).ready(function() {

    // Pour l'utilisation de animate.css
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });




    $(function() {
        $('#charger').click(function() {

            // Arrêter le carousel
            $("#myCarousel").carousel('pause');

            $("#btn").click(function(){
                $("#myCarousel").carousel(0);
            });

            $.getJSON('../select.json', function(donnees) {

                $('#img0').attr('src', donnees.response.docs[0].sm_image_url);
                $('#h4_0').html(donnees.response.docs[0].ss_rubrique);

                // A chaque transition...
                $("#myCarousel").on('slid.bs.carousel', function () {
                    var idSlideActivated = document.getElementsByClassName("item active")[0].getElementsByClassName("image")[0].getAttribute("id");
                    var subSlideActivated = idSlideActivated.substr(3,4);

                    $('#j_'+ subSlideActivated).show().animateCss('fadeInLeft');
                    $('#p_'+ subSlideActivated).animateCss('fadeInRightBig');

                    for (i = 0; i < donnees.response.docs.length ; i++) {
                        if (i != subSlideActivated) {
                            $('#j_' + i).fadeOut(200);
                        }
                    }
                });

                // Création du premier bloc de texte
                $('.container').append('<div style="display:none" class="jumbotron" id="j_0">' +
                    '<h2 id="h2_0" >'+ donnees.response.docs[0].label + '</h2>' +
                    '<p id="p_0">' + donnees.response.docs[0].ts_texte + '</p>' +
                    '<blockquote class="blockquote-reverse">' +
                    '<small><cite title="Source Title">'+ donnees.response.docs[0].ts_keywords +'</cite></small>'+
                    '</blockquote>'+
                    '<a class="btn btn-link" href="' + donnees.response.docs[0].path+ '">Lien vers le site</a>' +
                    '</div>');

                $('#j_0').fadeIn().animateCss('fadeInLeft');
                $('#p_0').animateCss('fadeInRightBig');

                // Parcours du fichier JSON
                for (i = 1; i < donnees.response.docs.length ; i++) {
                    // slides
                    $('.carousel-inner').append('<div class="item">' +
                        '<img class="image" id="img' + i +  '">' +
                        '<div class="carousel-caption">' +
                        '<h4 id="h4_' + i + '"></h4>' +
                        '<p id="p' + i + '"></p></div></div>');
                    $('#h4_'+i).html(donnees.response.docs[i].ss_rubrique);
                    $('#img'+i).attr('src', donnees.response.docs[i].sm_image_url);

                    // Bloc de texte
                    $('.container').append('<div style="display:none" class="jumbotron" id="j_' + i +  '">' +
                        '<h2 id="h2_' + i + '">'+ donnees.response.docs[i].label + '</h2>' +
                        '<p id="p_' + i + '"></p>' +
                        '<blockquote class="blockquote-reverse">' +
                        '<small><cite title="Source Title">'+ donnees.response.docs[i].ts_keywords +'</cite></small>'+
                        '</blockquote>'+
                        '<a class="btn btn-link" href="' + donnees.response.docs[i].path + '">Lien vers le site</a>' +
                        '</div>');
                    $('#p_'+i).html(donnees.response.docs[i].ts_texte);
                }

                $('#charger').animateCss("bounceOutUp");
                $('#charger').fadeOut(1000);
                $('.panel-primary').animateCss("bounceOutUp");
                $('.panel-primary').fadeOut(1000);
            });
        });
    });

});