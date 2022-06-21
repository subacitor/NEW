const btnstyle = document.querySelector(".btnstyle");
        btnstyle.addEventListener("click", function () {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        });
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 70) {
                btnstyle.classList.add("active");
            } else {
                btnstyle.classList.remove("active");
            }
        });