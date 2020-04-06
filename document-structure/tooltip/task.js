let hasTooltips = Array.from(document.querySelectorAll(".has-tooltip"));


for (let i = 0; i < hasTooltips.length; i++) {
    hasTooltips[i].insertAdjacentHTML("afterend", `<div class="tooltip">${hasTooltips[i].title}</div>`);
    hasTooltips[i].addEventListener("click", e => {
        e.preventDefault();
        let tooltips = document.querySelectorAll(".tooltip");
        for (let j = 0; j < tooltips.length; j++) {
            tooltips[j].classList.remove("tooltip_active");
            tooltips[i].classList.add("tooltip_active");
        }
    })
    
}
