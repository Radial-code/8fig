        let prevScrollPosition = 0;
        let isHeaderVisible = false;
        function handleScroll() {
            const currentScrollPosition = window.scrollY;
            const visibleHeader = currentScrollPosition > 1 ? prevScrollPosition > currentScrollPosition : false;
            prevScrollPosition = currentScrollPosition;
            isHeaderVisible = visibleHeader;
            const contentContainer = document.querySelector(".content-container");
            const navBtn = document.querySelector(".get_nav_btn");
            if (isHeaderVisible) {
                contentContainer.classList.add("background_blur_header", "top_0");
                navBtn.classList.remove("d-none");
            } else {
                contentContainer.classList.remove("top_0");
            }
        }
        window.addEventListener("scroll", handleScroll);