
     let prevScrollPosition = 0;
        let isHeaderVisible = false;

        function handleScroll() {
            const currentScrollPosition = window.scrollY;
            let visibleHeader = isHeaderVisible;

            const contentContainer = document.querySelector(".content-container");
            const getNavBtn = document.querySelector(".get_nav_btn");
          
             contentContainer.style.top = -currentScrollPosition + "px";
           

            if (currentScrollPosition < 100) {
                contentContainer.classList.remove("show_header");
                    contentContainer.classList.remove("background_blur_header");
   } else {
                visibleHeader = false;
                contentContainer.classList.remove("show_header");
                    contentContainer.classList.remove("background_blur_header");
                    getNavBtn.classList.add("d-none");
                
            }
    if (currentScrollPosition >  window.innerHeight) {
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
