let signin = document.getElementById("signin");
let form = document.getElementById("signin__form");
let welcome = document.getElementById("welcome");
form.addEventListener('submit', (e) => {
    let formData = new FormData(form);
    let request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    request.addEventListener('readystatechange', function () {
        if (this.readyState == request.DONE && this.status == 200) {
            data = JSON.parse(this.responseText);
            if(data.success) {
                localStorage.succesValue = data.user_id;
                signin.classList.remove("signin_active");
                welcome.classList.add("welcome_active");
                welcome.innerText += data.user_id;
            } else {
                alert("Неверный логин/пароль");
            }

        }
    });
    request.send(formData);
    e.preventDefault();
});

window.onload = () => { 
    if (localStorage.succesValue) {
        welcome.classList.add('welcome_active');
        welcome.innerText += localStorage.succesValue; 
    } else {
        signin.classList.add("signin_active");
    }
}
