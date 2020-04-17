let progress = document.getElementById('progress');
let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.onloadstart = function() {
        progress.value = 0.4;
    };
    xhr.upload.onprogress = function() {
        progress.value = 0.9;
    };
    xhr.upload.onload = function() {
        progress.value = 1;
    };
    xhr.upload.onerror = function() {
        alert( 'Произошла ошибка при загрузке данных на сервер!' );
    }
    xhr.send(formData);
});
