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

     infinite: window.innerWidth > 1536 ?true:true,
     speed: window.innerWidth > 1536 ? 0:0,
     slidesToShow: 6,
     centerMode: true,
    //  focusOnSelect: true,
     centerPadding: 0,
     slidesToScroll: 1,
     draggable: false,
     accessibility: false,
     variableWidth: window.innerWidth > 1536 ?true:true,
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

$('.slider_new_custom').slick('slickGoTo', 3);