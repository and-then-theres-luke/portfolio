// alert("Linked!")

// popup controls

document.addEventListener("DOMContentLoaded", function()
    {
        function showPopUp() {
            const popUpScreen = document.getElementById("popUpScreen")
            popUpScreen.classList.remove("hidden-pop-up")
        }
        setTimeout(showPopUp, 10000)
    }

)

function removePopUp() {
    const popUpScreen = document.getElementById("popUpScreen")
    popUpScreen.style.display = "none"
}

//

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
    const links = document.querySelectorAll(".navlink")
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        links.forEach((link) => link.classList.add("darklink"))
    } else {
        navbar.classList.remove("scrolled");
        links.forEach((link) => link.classList.remove("darklink"))
    }
});


let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n) {
    slides = document.getElementsByClassName("mySlides")
    slides[slideIndex - 1].style.display = "none"
    showSlides(slideIndex += n)
}

function showSlides(n) {
    slides = document.getElementsByClassName("mySlides")
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) { slideIndex = slides.length}
    slides[slideIndex - 1].style.display  = "block";
}

// function plusSlides(n) {
//     slides = document.getElementsByClassName("mySlides")
//     slides[slideIndex - 1].target.classList.remove("slideShow")
// }

// function showSlides(n) {
//     slides = document.getElementsByClassName("mySlides")
//     if (n > slides.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length - 1
//     }
//     slides[slideIndex - 1].target.classList.add("slideShow")
// }

function darkmode() {
    let main = document.getElementById("body")
    if (main.classList.contains("darkmode")) {
        main.classList.remove("darkmode")
        main.classList.add("lightmode")
    } else {
        main.classList.remove("lightmode")
        main.classList.add("darkmode")
    }

}