"use strict"
//В момент запуска скрипта, покажите окно #modal_main
const modalMain = document.getElementById("modal_main");
modalMain.classList.add("modal_active");
//Сделайте закрытие активного окна по нажатию на его элемент с классом modal__close
const modalClose = document.querySelectorAll(".modal__close");
const closeButton = Array.from(modalClose);
for ( let buttons in closeButton ) {
    modalClose[buttons].onclick = () => modalMain.classList.remove("modal_active");
}
//По нажатию на элемент с классом show-success покажите окно #modal_success
const modalSuccess = document.getElementById("modal_success");
const showSuccess = document.querySelector(".show-success");
showSuccess.onclick = () => {
    modalSuccess.classList.add("modal_active");
    modalMain.classList.remove("modal_active");
}

closeButton[2].onclick = () => modalSuccess.classList.remove("modal_active")



