"use strict"

const clickerCounter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");


image.onclick = function counter() {
    clickerCounter.textContent++;
    if (image.width === 200) {
        image.width = 300;
    } else {
        image.width = 200;
    }
};
