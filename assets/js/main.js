// <!-- BACk-TO-TOP -->
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#back-to-top").fadeIn();
        } else {
            $("#back-to-top").fadeOut();
        }
    });
    $("#back-to-top").click(function () {
        $("html, body").animate({
                scrollTop: 0,
            },
            40
        );
        return false;
    });
});

//   <!-- YEAR FUNCTION -->
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerText = currentYear;

// JOIN COMMUNITY SLIDER CODE
 $(".slider_new_custom").slick({
     dots: true,
     infinite: true,
     speed: 1000,
     slidesToShow: 5,
     centerMode: true,
    //  focusOnSelect: true,
     centerPadding: 60,
     slidesToScroll: 1,
     draggable: false,
     accessibility: false,
    //  variableWidth: true,
     prevArrow: $(".custom-prev"),
     nextArrow: $(".custom-next"),
     responsive: [{
             breakpoint: 2000,
             settings: {
                 slidesToShow: 5,

             },
         },
         {
             breakpoint: 992,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 1,
                 centerMode: false,
             },
         },
         {
             breakpoint: 767.9,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1,
                 centerMode: false,
                 centerPadding: 30,
                 speed: 300,
             },
         },
         {
             breakpoint: 425,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 2,
                 speed: 300,
             },
         },
     ],
 });

// const $originalSlides = $('.slider_new_custom  ');


//  $('.slider_new_custom').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
//   // Remove the class from all slides
//   $originalSlides.removeClass('slick-clone-current');

//   // Determine if next slide is first or last
//   const slideCount = $originalSlides.length - 1;
//   const nextSlideIsFirst = currentSlide === slideCount;
//   const nextSlideIsLast = nextSlide === slideCount;

//   // Add class to appropriate next or previous slide
// //   if (nextSlideIsFirst) {
// //     $originalSlides.eq(0).addClass('slick-clone-current');
// //   }
//   if (nextSlideIsLast) {
//     $originalSlides.eq(slideCount).addClass('slick-clone-current');
//   }
// });
// // $('.slider_new_custom').on('afterChange', function(e, slick, currentSlide, nextSlide) {
// //   $('.slick-clone-current').removeClass('slick-clone-current');
// // })

