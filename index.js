$(document).ready(function (){
    console.log($('.sova').offset().top);

    $('.menutren ul li a').click(function (event){
        event.preventDefault();

        let target = $(this).attr('data-target');

        $('html, body').animate({ scrollTop: $(target).offset().top},1400,"easeOutCubic");
    });

// viet cho nut back to top
    $('.nutlentren').click(function (event){
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0},1400,"easeInOutSine");
    });
});