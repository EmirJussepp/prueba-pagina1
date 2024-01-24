document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('nav');
        const scrollY = window.scrollY;

        if (scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
            navbar.querySelector('.container').classList.remove('red-border');
        } else {
            navbar.classList.remove('navbar-scrolled');
            navbar.querySelector('.container').classList.add('red-border');


        }
    });
});
const menu = document.querySelector(".navbar");
let botonColapsado= document.querySelector('.navbar-collapse');
const menuLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');

let botonCheck=  document.getElementById('btn-check');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
            const menuLink = document.querySelector(`.navbar-nav a[href="#${id}"]`);
            let linkActivos= document.querySelector(".navbar-nav a.active");

            if (entry.isIntersecting) {
                linkActivos.classList.remove("active");
                menuLink.classList.add("active");
            }
        });
    },
    { rootMargin: "-30% 0px -70% 0px" }
);
const closeMavbar = () => {
    botonColapsado.classList.remove('show');
};





menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", function () {
        closeMavbar();
        menu.classList.remove(".navbar-collapse-custom");
        botonCheck.checked = false;
    });

    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
        observer.observe(target);
    }
});


