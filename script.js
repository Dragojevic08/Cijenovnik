
        /* Hamburger meni */
        document.getElementById("navToggle").onclick = () => {
        document.getElementById("navLinks").classList.toggle("show");
        };

    /* Galerija */
    let slides = document.querySelectorAll(".gallery img");
    let current = 0;

    function showSlide(i) {
        slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
        }

    function nextSlide() {
        current = (current + 1) % slides.length;
    showSlide(current);
        }

    function prevSlide() {
        current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
        }

    setInterval(nextSlide, 4000);
    document.querySelector(".next").onclick = nextSlide;
    document.querySelector(".prev").onclick = prevSlide;

    /* Animacije sekcija */
    const animated = document.querySelectorAll("[data-animate]");
    function checkAnimations() {
        let trigger = window.innerHeight * 0.85;

            animated.forEach(el => {
                if (el.getBoundingClientRect().top < trigger) {
        el.classList.add("visible");
                }
            });
        }

    window.addEventListener("scroll", checkAnimations);
    window.addEventListener("load", checkAnimations);
