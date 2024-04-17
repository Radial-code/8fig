
     let prevScrollPosition = 0;
        let isHeaderVisible = false;

        function handleScroll() {
            const currentScrollPosition = window.scrollY;
            let visibleHeader = isHeaderVisible;

            const contentContainer = document.querySelector(".content-container");
            const getNavBtn = document.querySelector(".get_nav_btn");

            if (currentScrollPosition > 100) {
                contentContainer.classList.add("hide_header");
                    contentContainer.classList.remove("background_blur_header");

                if (currentScrollPosition >  window.innerHeight) {
                    visibleHeader = prevScrollPosition > currentScrollPosition;
                    contentContainer.classList.add("background_blur_header");
                    contentContainer.classList.remove("hide_header");
                    getNavBtn.classList.remove("d-none");
                }
            } else {
                visibleHeader = false;
                contentContainer.classList.remove("hide_header");
                    contentContainer.classList.remove("background_blur_header");
                    getNavBtn.classList.add("d-none");
                
            }
            prevScrollPosition = currentScrollPosition;
            isHeaderVisible = visibleHeader;
      
        }

        window.addEventListener("scroll", handleScroll);
