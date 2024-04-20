// HEADER JS CODE START HERE
let prevScrollPosition = 0;
let isHeaderVisible = false;

function handleScroll() {
  const currentScrollPosition = window.scrollY;
  let visibleHeader = isHeaderVisible;

  const contentContainer = document.querySelector(".content-container");
  const getNavBtn = document.querySelector(".get_nav_btn");

  contentContainer.style.top = currentScrollPosition > 0 ? -currentScrollPosition + "px" : 0;

  if (currentScrollPosition < 100) {
    contentContainer.classList.remove("show_header");
    contentContainer.classList.remove("background_blur_header");
  } else {
    visibleHeader = false;
    contentContainer.classList.remove("show_header");
    contentContainer.classList.remove("background_blur_header");
    getNavBtn.classList.add("d-none");
  }
  if (currentScrollPosition > window.innerHeight) {
    visibleHeader = prevScrollPosition > currentScrollPosition;
    contentContainer.classList.add("background_blur_header");
    contentContainer.classList.add("show_header");
    getNavBtn.classList.remove("d-none");
  }
  prevScrollPosition = currentScrollPosition;
  isHeaderVisible = visibleHeader;
}

window.addEventListener("resize", handleScroll);
window.addEventListener("load", handleScroll); // Note: Use "load" event instead of "onload"
window.addEventListener("scroll", handleScroll);

// BACk-TO-TOP
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

// YEAR CHANGER FUNCTION
var currentYearElements = document.getElementsByClassName("currentYear");
for (var i = 0; i < currentYearElements.length; i++) {
  currentYearElements[i].innerText = new Date().getFullYear();
}

// VIDEO IPHONE JS CODE START HERE
var video = document.getElementById("myVideo");
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (isSafari) {
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
}
function backToTopOnReload() {
  window.onload = function () {
    // Scroll the window to the top
    window.scrollTo(0, 0);
  }
}

// Call the function to enable back to top on window reload
backToTopOnReload();

// JOIN COMMUNITY SLIDER CODE
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.my-slider-container', {
    spaceBetween: 20,
    slidesPerView: "auto",
    centeredSlides: true,
    updateOnWindowResize: true,
    effect: "coverflow",
    allowTouchMove: false,
    breakpoints: {
      320: {
        loop: true,
        slidesPerView: 1,
        effect: "coverflow",
      },
      768: {
        loop: false,
        slidesPerView: "auto",
        effect: 'coverflow',

        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 420,
          modifier: 1,
          slideShadows: false
        },
      },
      1280: {
        slidesPerView: "auto",
        effect: 'coverflow',
      }
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 320,
      modifier: .5,
      slideShadows: false
    },
    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },
    pagination: {
      el: '.pagination',
      clickable: true,
    },
  });

  swiper.on('slideChangeTransitionStart', function () {
    swiper.updateSlides();
    swiper.slideReset();
  });
  swiper.slideTo(2);
});