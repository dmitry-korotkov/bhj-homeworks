
let dropdownList = document.querySelector(".dropdown__list");
let dropdownValue = document.querySelector(".dropdown__value");
let dropdownLinks = Array.from(document.querySelectorAll(".dropdown__link"));


function dropdown() {
    dropdownList.classList.toggle("dropdown__list_active");   
}

dropdownValue.addEventListener("click", dropdown);

for(let dropdownLink of dropdownLinks) {
    function getDropdownValue(event) {
        event.preventDefault();
        dropdownValue.textContent = dropdownLink.textContent;
        dropdownList.classList.remove("dropdown__list_active");
        ///А почему когда тут ставишь "return false" функция некорректно работает ?
    }
    dropdownLink.addEventListener("click", getDropdownValue)
    
}

