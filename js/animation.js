$(document).ready(function(){
    var detector = 0;
    $('header nav li a').hover(function(){
        $('.hover').fadeIn(1);
        $(".hover").offset({top: $(this).offset().top-18, left: $(this).offset().left-10});
        $('.hover').width(($(this).width()+15)+'px');
    }, function(){
        $('.hover').fadeOut(1);
    });
    $("html").click(function() {
        if($('.pop').is(":visible")){
            $('.pop').fadeOut();
            $('#video').get(0).pause();
        } 
    });
    $('.pop').click(function (e) {
        e.stopPropagation();
    });
    $('.contenedor .noti .izq button').click(function(e){
        if(!$('.pop').is(":visible")){
            e.stopPropagation();
        } 
        $('.pop').fadeIn();
        $(this).fadeOut();
        $('.contenedor .noti .izq button').fadeOut();
        $('#video').get(0).play();
        $('.contenedor .noti .izq .pop .boton').fadeIn();
    });
    $('.contenedor .noti .izq .pop .boton').click(function(){
        $('.pop').fadeOut();
        $('#video').get(0).pause();
        $('.contenedor .noti .izq button').fadeIn();
    });
});