// alert("Linked!")

// POPUP FUNCTION

document.addEventListener("DOMContentLoaded", function () {
    function showPopUp() {
        const popUpScreen = document.getElementById("popUpScreen");
        popUpScreen.classList.remove("hidden-pop-up");
    }
    setTimeout(showPopUp, 10000);
});

function removePopUp() {
    const popUpScreen = document.getElementById("popUpScreen");
    popUpScreen.style.display = "none";
}

//SCROLL FUNCTIONS

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    const links = document.querySelectorAll(".navlink");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        links.forEach((link) => link.classList.add("darklink"));
    } else {
        navbar.classList.remove("scrolled");
        links.forEach((link) => link.classList.remove("darklink"));
    }
});

// SLIDESHOW FUNCTIONS
let slideIndex = 0;

function plusSlides(n) {
    slides = document.getElementsByClassName("mySlides");
    slides[slideIndex].style.display = "none";
    showSlides((slideIndex += n));
}

function showSlides(n) {
    slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length;
    }
    console.log(slideIndex);
}

// DARKMODE FUNCTIONS
function darkmode() {
    let main = document.getElementById("body");
    if (main.classList.contains("darkmode")) {
        main.classList.remove("darkmode");
        main.classList.add("lightmode");
    } else {
        main.classList.remove("lightmode");
        main.classList.add("darkmode");
    }
}
