const modalMain = document.getElementById("subscribe-modal");

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift(); 
    }
};

window.addEventListener('load', () => {
    if (!getCookie('closed')) {
        modalMain.classList.add('modal_active'); 
    }
});

document.addEventListener("click", e => {
    if (e.target.classList.contains("modal__close")) {
        modalMain.classList.remove("modal_active");
        document.cookie = 'closed=true'
    }
})
