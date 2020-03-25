let rotatorCase = Array.from(document.querySelectorAll(".rotator__case "));
let index = 0;
function toggle() {
        rotatorCase[index].classList.toggle("rotator__case_active");
        rotatorCase[index].style.color = rotatorCase[index].dataset.color;
}
function nextRotator() {
    toggle(index);
    index++;
    if (index >= rotatorCase.length) {
        index = 0;
    }
    toggle(index);
}
setInterval(nextRotator, 3000);

