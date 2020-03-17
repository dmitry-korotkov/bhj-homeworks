"use strict"
//Зарегистрируйте обработчики события click на элементах с классом menu__link

/*
let exclusiveElements = document.querySelectorAll("li.menu__link a");
const menuSub = document.getElementsByClassName("menu_sub");
console.log(menuLink)
console.log(exclusiveElements)
console.log(menuSub)
menuLink.onclick = () => {
    menuSub.classList.add("menu_active");
    return false
}
*/
let menuLinks = Array.from(document.querySelectorAll(".menu__link"));

//console.log(menuLinks)


for (let menuLink of menuLinks) {
    console.log(menuLink.parentElement.querySelector(".menu_sub"))
    menuLink.onclick = () => {
        let menuSub = menuLink.parentElement.querySelector(".menu_sub")
         if (menuSub) {
            menuSub.classList.add("menu_active");
            return false;
         }
        
    }
}