        // let prevScrollPosition = 0;
        // let isHeaderVisible = false;
        // function handleScroll() {
        //     const currentScrollPosition = window.scrollY;
        //     const visibleHeader = currentScrollPosition > 1 ? prevScrollPosition > currentScrollPosition : false;
        //     prevScrollPosition = currentScrollPosition;
        //     isHeaderVisible = visibleHeader;
        //     const contentContainer = document.querySelector(".content-container");
        //     const navBtn = document.querySelector(".get_nav_btn");
        //     if (isHeaderVisible) {
        //         contentContainer.classList.add("background_blur_header", "top_0");
        //         navBtn.classList.remove("d-none");
        //     } else {
        //         contentContainer.classList.remove("top_0");
        //     }
        // }
// window.addEventListener("scroll", handleScroll);
        
     let prevScrollPosition = 0;
        let isHeaderVisible = false;

        function handleScroll() {
            const currentScrollPosition = window.scrollY;
            let visibleHeader = isHeaderVisible;

            const contentContainer = document.querySelector(".content-container");
            const getNavBtn = document.querySelector(".get_nav_btn");

            if (currentScrollPosition > 100) {
                contentContainer.classList.add("hide_header");

                if (currentScrollPosition > 768) {
                    visibleHeader = prevScrollPosition > currentScrollPosition;
                    contentContainer.classList.add("background_blur_header");
                    contentContainer.classList.remove("hide_header");
                    getNavBtn.classList.remove("d-none");
                }
            } else {
                visibleHeader = false;
                contentContainer.classList.remove("hide_header");
                if (contentContainer.classList.contains("background_blur_header")) {
                    contentContainer.classList.remove("background_blur_header");
                    getNavBtn.classList.add("d-none");
                }
            }
            prevScrollPosition = currentScrollPosition;
            isHeaderVisible = visibleHeader;
            if (currentScrollPosition > 1000 && !isHeaderVisible && contentContainer.classList.contains("background_blur_header")) {
                contentContainer.classList.add("hide_header");
            }
        }

        window.addEventListener("scroll", handleScroll);
