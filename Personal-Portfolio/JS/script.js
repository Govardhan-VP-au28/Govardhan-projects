//javascript of responsive navigation menu

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

//javascript for video slider navigation
const Btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");

var sliderNav = function(manual) {
    Btns.forEach((btn) => {
        btn.classList.remove("active");
    })
    slides.forEach((slide) => {
        slide.classList.remove("active");
    })
    Btns[manual].classList.add("active");
    slides[manual].classList.add("active");
};
Btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
})