// alert("Linked!")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
        else {
            entry.target.classList.remove("show")
        }
    });
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


let slideIndex = 1;
showSlides(slideIndex)

// function plusSlides(n) {
//     slides = document.getElementsByClassName("mySlides")
//     slides[slideIndex - 1].style.display = "none"
//     showSlides(slideIndex += n)
// }

// function showSlides(n) {
//     slides = document.getElementsByClassName("mySlides")
//     if (n > slides.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) { slideIndex = slides.length}
//     slides[slideIndex - 1].style.display  = "block";
// }

function plusSlides(n) {
    slides = document.getElementsByClassName("mySlides")
    slides[slideIndex - 1].target.classList.remove("slideShow")
}

function showSlides(n) {
    slides = document.getElementsByClassName("mySlides")
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length - 1
    }
    slides[slideIndex - 1].target.classList.add("slideShow")
}