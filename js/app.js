// Foundation 
$(document).foundation()

 // Slick general
$(document).ready(function () {
   
    $('.slider-principal').slick({
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2800
    });

});


