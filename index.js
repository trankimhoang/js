$(document).ready(function (){
    console.log($('.sova').offset().top);

    $('.menutren ul li:nth-child(1) a').click(function (event){
        event.preventDefault();
        $('html, body').animate({ scrollTop: $('.sova').offset().top},1400,"easeOutCubic");
    });

    $('.menutren ul li:nth-child(2) a').click(function (event){
        event.preventDefault();
        $('html, body').animate({ scrollTop: $('.sage').offset().top},1400,"easeOutExpo");
    });

    $('.menutren ul li:nth-child(3) a').click(function (event){
        event.preventDefault();
        $('html, body').animate({ scrollTop: $('.reyna').offset().top},1400,"easeOutExpo");
    });

    $('.menutren ul li:nth-child(4) a').click(function (event){
        event.preventDefault();
        $('html, body').animate({ scrollTop: $('.jett').offset().top},1400,"easeOutExpo");
    });

    $('.menutren ul li:nth-child(5) a').click(function (event){
        event.preventDefault();
        $('html, body').animate({ scrollTop: $('.phoenix').offset().top},1400,"easeOutExpo");
    });

// viet cho nut back to top
    $('.nutlentren').click(function (event){
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0},1400,"easeInOutSine");
    });
});