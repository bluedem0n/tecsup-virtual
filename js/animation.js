$(document).ready(function(){
    $('header nav li a').hover(function(){
        $('.hover').fadeIn(1);
        $(".hover").offset({top: $(this).offset().top-18, left: $(this).offset().left-10});
        $('.hover').width(($(this).width()+15)+'px');
    }, function(){
        $('.hover').fadeOut(1);
    });
     $('.contenedor .noti .izq button').hover(function(){
        $('.contenedor .noti .izq p').fadeOut(1000);         
        $(this).fadeOut(1000);
        $('.contenedor .noti .izq .boton').fadeIn(1000);
        $('#video').fadeIn(500, function(){
            $('#video').get(0).play();
        });
    });
    $('.contenedor .noti .izq .boton').click(function(){
        $('.contenedor .noti .izq p,.contenedor .noti .izq button').fadeIn(1000);
        $('.contenedor .noti .izq .boton').fadeOut(1000);
        $('#video').fadeOut(500, function () {
            $('#video').get(0).pause();
        });
    });
});