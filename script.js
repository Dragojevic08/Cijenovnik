
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
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    const triggerHeight = window.innerHeight * 0.4; // prag za scrolled
    if (window.scrollY > triggerHeight) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
/* Interaktivni cjenovnik */
const options = document.querySelectorAll(".option");
const infoBox = document.getElementById("selectedInfo");

options.forEach(option => {
    option.addEventListener("click", () => {

        // ukloni sve klase
        options.forEach(o => o.classList.remove("active", "dimmed"));

        // aktiviraj kliknutu
        option.classList.add("active");

        // ostale smanji
        options.forEach(o => {
            if (o !== option) o.classList.add("dimmed");
        });

        // upiši info
        infoBox.innerHTML = `
            <h3>${option.dataset.name}</h3>
            <p>${option.dataset.desc}</p>
            <p style="font-weight:bold; color:#ff1493; margin-top:10px;">${option.dataset.price}</p>
        `;
    });
});

    window.addEventListener("scroll", checkAnimations);
    window.addEventListener("load", checkAnimations);
