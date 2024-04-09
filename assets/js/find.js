var swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto", // Set the number of slides per view
  spaceBetween: 30, // Set the space between slides
  effect: "fade", // Enable fade effect
  fadeEffect: {
    crossFade: true, // Enable cross fade effect
  },
  speed: 4000, // Duration of the fade effect in milliseconds (e.g., 1000 for 1 second)
  autoplay: {
    delay: 5000, // Autoplay delay in milliseconds (e.g., 5000 for 5 seconds)
    disableOnInteraction: false, // Allow autoplay to continue after user interactions (e.g., click)
  },
  pagination: {
    el: ".swiper-pagination", // Add pagination bullets
    clickable: true, // Allow clicking pagination bullets
  },
});
