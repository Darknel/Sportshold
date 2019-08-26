$(document).ready(function(){
    $('.main-container__brands').slick({
        infinite: true,
        prevArrow: $('.slider-prev'),
        nextArrow: $('.slider-next'),
        responsive: [{
            breakpoint: 10000,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
                settings: 'unslick'
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 400,
            settings: {
                
            }
        }
        ]
    });
});