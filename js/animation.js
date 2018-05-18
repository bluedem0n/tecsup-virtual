$(document).ready(function(){
    var detector = 0;
    $('.hover').fadeOut(1);
    window.sr = ScrollReveal({ reset: true });

    // Customizing a reveal set
    sr.reveal('.foo', { duration: 700 });
    sr.reveal('.padre');
    sr.reveal('.padre');
    $('header nav li a').hover(function(){
        $('.hover').fadeIn(1);
        $(".hover").offset({top: $(this).offset().top-25, left: $(this).offset().left-10});
        $('.hover').width(($(this).width()+15)+'px');
    }, function(){
        $('.hover').fadeOut(1);
    });
    $("html").click(function() {
        if($('.pop').is(":visible")){
            $('.pop').fadeOut();
            $('#video').get(0).pause();
            $('.contenedor .noti .izq button').fadeIn();
            $('.oscuro').fadeOut(500);
            $('.contenedor .noti .izq').fadeIn();
        } 
    });

    $('.mes .contenedor .padre .caja').hover(function(){
        $(".der", this).css("background", "#a23892");
        $(".izq .title", this).css("color", "#a23892");

    }, function(){
        $(".der", this).css("background", "#01aef0");
        $(".izq .title", this).css("color", "#01aaf0");
        
    });

    $('.pop').click(function (e) {
        e.stopPropagation();
    });
    $('.contenedor .noti .izq button').click(function(e){
        if(!$('.pop').is(":visible")){
            e.stopPropagation();
        } 
        $('.pop, .pop .boton').fadeIn();
        $(this).fadeOut();
        $('.contenedor .noti .izq').fadeOut();

        $('#video').get(0).play();
        $('.pop .boton').fadeIn();
        $('.oscuro').fadeIn(500);
        $('html, body').stop(true).animate({
            scrollTop: ($('.pop').offset().top-500)
        }, 500);   });



    $('.pop .boton').click(function(){
        $('.pop').fadeOut();
        $('#video').get(0).pause();
        $('.contenedor .noti .izq').fadeIn();
        $('.oscuro').fadeOut(500);
        $(this).fadeOut();
        $('.contenedor .noti .izq').fadeIn();
    });
});