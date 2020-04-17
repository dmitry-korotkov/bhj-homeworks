function DataHandler () {
    if (xhr.readyState == 4) {
        document.getElementById("loader").classList.remove("loader_active")
        const items = document.getElementById("items");
        const data = JSON.parse(xhr.responseText);
        const valutes = data.response.Valute
        for (let valute in valutes) {
            items.insertAdjacentHTML("beforeend",`<div class="item"><div class="item__code">
            ${valutes[valute].CharCode}
        </div>
        <div class="item__value">
            ${valutes[valute].Value}
        </div>
        <div class="item__currency">
            ${valutes[valute].Name}.
        </div></div>`)  
        
        } 
      }
}

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = DataHandler;
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

