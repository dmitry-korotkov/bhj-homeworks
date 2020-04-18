let editor = document.getElementById("editor");
editor.insertAdjacentHTML("afterend",`<button id="clearText" style = "display:block">Очистить содержимое</button>`);
let clearButton = document.getElementById("clearText");
editor.addEventListener("input",(e)=> {
    localStorage.editorValue = editor.value;   
});

clearButton.addEventListener("click",(e)=> {
    editor.value = "";
    localStorage.editorValue = editor.value;
});


    editor.value = localStorage.editorValue;
