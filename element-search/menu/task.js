"use strict"

let menuLinks = Array.from(document.querySelectorAll(".menu__link"));

for (let menuLink of menuLinks) {
    
    menuLink.onclick = function()  {
        let menuSub = menuLink.parentElement.querySelector(".menu_sub")
        if (menuSub.classList.contains("menu_active")) {
            menuSub.classList.remove("menu_active");
            return false;
        }

        if (menuLink.closest(".menu_main").querySelector(".menu_active")) {
            menuLink.closest(".menu_main").querySelector(".menu_active").classList.remove("menu_active");  
        }
        menuSub.classList.add("menu_active");
        return false   
    }
}
