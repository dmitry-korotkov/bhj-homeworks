"use strict"

let sliderArrowPrev  = document.querySelector(".slider__arrow_prev");
let sliderArrowNext  = document.querySelector(".slider__arrow_next");
let sliderItems  = Array.from(document.querySelectorAll(".slider__item"));
let sliderDots  = Array.from(document.querySelectorAll(".slider__dot"));
sliderDots[0].classList.add("slider__dot_active");



sliderArrowNext.onclick = function () {
    
    for(let i = 0; i < sliderItems.length; i++) {
        if(sliderItems[i].classList.contains("slider__item_active") || sliderDots[i].classList.contains("slider__dot_active"))   {
            let activeSliderItem = sliderItems[i];
            let activeSliderDot = sliderDots[i];
            
            if (i !== sliderItems.length - 1 ) {
                activeSliderItem.classList.remove("slider__item_active");
                activeSliderDot.classList.remove("slider__dot_active");
                sliderItems[i+1].classList.add("slider__item_active");
                sliderDots[i+1].classList.add("slider__dot_active");
                activeSliderItem = sliderItems[i+1];
                activeSliderDot = sliderDots[i+1];
                break
            } else {
                activeSliderItem.classList.remove("slider__item_active");
                activeSliderDot.classList.remove("slider__dot_active");
                sliderItems[i - (sliderItems.length - 1)].classList.add("slider__item_active");
                sliderDots[i - (sliderItems.length - 1)].classList.add("slider__dot_active");
                activeSliderItem = sliderItems[i - (sliderItems.length - 1)];
                activeSliderDot = sliderItems[i - (sliderItems.length - 1)];
                
            }      
        }        
    }
}

sliderArrowPrev.onclick = function () {
    for(let i = sliderItems.length - 1; i >= 0; i--) {
        if(sliderItems[i].classList.contains("slider__item_active")) {
            console.log("fpfpf");
            let activeSliderItem = sliderItems[i];
            let activeSliderDot = sliderDots[i];
            if (i !== 0 ) {
                activeSliderItem.classList.remove("slider__item_active");
                activeSliderDot.classList.remove("slider__dot_active");
                sliderItems[i-1].classList.add("slider__item_active");
                sliderDots[i-1].classList.add("slider__dot_active");
                activeSliderItem = sliderItems[i-1];
                activeSliderDot = sliderDots[i-1];
                break
            } else {
                activeSliderItem.classList.remove("slider__item_active");
                activeSliderDot.classList.remove("slider__dot_active");
                sliderItems[i + (sliderItems.length - 1)].classList.add("slider__item_active");
                sliderDots[i + (sliderItems.length - 1)].classList.add("slider__dot_active");
                activeSliderItem = sliderItems[i + (sliderItems.length - 1)];
                activeSliderDot = sliderItems[i + (sliderItems.length - 1)];
            }            
        }        
    }
}

for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].onclick = function() {
        let activeSliderItem = sliderItems[i];
        if (!(activeSliderItem.classList.contains("slider__item_active"))) {
            for (let j = 0; j < sliderDots.length; j++) {
                sliderItems[j].classList.remove("slider__item_active"); 
                sliderDots[j].classList.remove("slider__dot_active");
                activeSliderItem.classList.add("slider__item_active");
                sliderDots[i].classList.add("slider__dot_active");
            }
        }                          
    }
}
