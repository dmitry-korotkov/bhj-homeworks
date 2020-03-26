let fontSize = Array.from(document.querySelectorAll(".font-size"));
let book = document.getElementById("book")
let colorFont = Array.from(document.querySelectorAll(".book__control_color .color"));
let colorBackground = Array.from(document.querySelectorAll(".book__control_background .color"));
let bookContent = document.querySelector(".book__content")


let activeFont = 1;
let activeColorFont = 0;
let activeBackground = 2;

function toggleFont (index) {
    fontSize[index].classList.toggle("font-size_active");
    if (index === 0) {
        book.classList.toggle("book_fs-small");
    }
    if (index === 2) {
        book.classList.toggle("book_fs-big");
    }
}


for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].onclick = function (e) {
        e.preventDefault();
        toggleFont(activeFont);
        toggleFont(i);
        activeFont = i;
    }
}

function toggleColor (index) {  
    colorFont[index].classList.toggle("color_active");
    bookContent.style.color = index > 0 ? colorFont[index].dataset.color : "black"
}

for (let i = 0; i < colorFont.length; i++) {
    colorFont[i].addEventListener("click", function (e) {
        e.preventDefault();
        toggleColor(activeColorFont);
        toggleColor(i);
        activeColorFont = i;
    })
}

function toggleBackground (index) {  
    colorBackground[index].classList.toggle("color_active");
    bookContent.style.background = index < 2 ? colorBackground[index].dataset.color : "white"
}

for (let i = 0; i < colorBackground.length; i++) {
    colorBackground[i].addEventListener("click", function (e) {
        e.preventDefault();
        toggleBackground(activeBackground);
        toggleBackground(i);
        activeBackground = i;
    })
}
