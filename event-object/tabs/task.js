let tabs = Array.from(document.querySelectorAll(".tab"));
let tabContents = Array.from(document.querySelectorAll(".tab__content"));
activeContent = 0;


function toogle (index) {
    tabs[index].classList.toggle("tab_active")
    tabContents[index].classList.toggle("tab__content_active")
}


for (let i = 0; i < tabs.length; i++) {
    function getActive () {
        toogle(activeContent);
        activeContent = i;
        toogle(activeContent);
    }
    tabs[i].addEventListener("click", getActive);
}
