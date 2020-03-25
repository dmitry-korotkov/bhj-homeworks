let reveals  = document.querySelectorAll(".reveal")
for(let reveal of reveals) {
    function revealActive () {
            const isInViewport = function(reveal) {
            const viewportHeight = window.innerHeight;
            const elementTop = reveal.getBoundingClientRect().top;
            return elementTop > viewportHeight ? true : false;
        };
        
        if(!isInViewport(reveal)) {
            reveal.classList.add("reveal_active");
        }
    }

    document.addEventListener("scroll", revealActive)
}



