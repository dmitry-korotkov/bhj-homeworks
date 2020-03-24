let tabs = Array.from(document.querySelectorAll(".tab"));
let tabContents = Array.from(document.querySelectorAll(".tab__content"));
console.log(tabs);



for(let i = 0; i < tabs.length; i++) {
     index = i;
}

function toogle (index) {
    if(tabs[index].classList.contains("tab_active")) {
        tabs[index].classList.remove("tab_active")
        tabContents[index].classList.remove(".tab__content")
    } else {
        tabs[index].classList.add("tab_active")
        tabContents[index].classList.add(".tab__content")
    }  
}

tabs[index].addEventListener("click", toogle);





for(let tab of tabs) {
    function toogle () {
        if(tab.classList.contains("tab_active")) {
            tab.classList.remove("tab_active")
        } else {
            tab.classList.add("tab_active")
        }
        
    
    }
    tab.addEventListener("click", toogle);
}




