
$(function(){
    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    });
    $('select').styler();
    $('.burger').on('click', function() {
        $('.menu ul').slideToggle();
    });
    
    $('.burger').click(function(){
        $('.burger span:nth-child(1)').toggleClass('first');
        $('.burger span:nth-child(2)').toggleClass('middle');
        $('.burger span:nth-child(3)').toggleClass('last');
    });
});
    