"use strict"

let sliderArrowPrev  = document.querySelector(".slider__arrow_prev");
let sliderArrowNext  = document.querySelector(".slider__arrow_next");
let sliderItems  = Array.from(document.querySelectorAll(".slider__item"));
let sliderDots  = Array.from(document.querySelectorAll(".slider__dot"));
sliderDots[0].classList.add("slider__dot_active");
let numberImage = 0;

function activeImage (numberImage) {
    sliderItems[numberImage].classList.toggle("slider__item_active"); 
    sliderDots[numberImage].classList.toggle("slider__dot_active");
}

sliderArrowNext.onclick = function() {
    activeImage(numberImage);
    numberImage++
    if (numberImage >= sliderItems.length) {
        numberImage = 0;
    }
    activeImage(numberImage);

}

sliderArrowPrev.onclick = function() {
    activeImage(numberImage);
    numberImage--
    if (numberImage < 0) {
        numberImage = sliderItems.length - 1
    }
    activeImage(numberImage);
}

for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].onclick = function() {
        activeImage(numberImage);
        activeImage(i);
        numberImage = i;
    }
}