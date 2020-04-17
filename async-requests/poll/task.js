function DataHandler() {
    if(xhr.readyState == 4) {
        const poolTitle = document.getElementById(("poll__title"));
        const data = JSON.parse(xhr.responseText);
        poolTitle.insertAdjacentText("beforeend",`${data.data.title}`);
        const answers = data.data.answers
        for (let answer in answers) {
            let pollAnswers = document.getElementById(("poll__answers"));
            pollAnswers.insertAdjacentHTML("beforeend",`<button class="poll__answer">${answers[answer]}</button>`);
        }
        let pollAnswersList = document.querySelectorAll(".poll__answer")
        for (let pollAnswer of pollAnswersList ) {
            pollAnswer.addEventListener("click", e => {
                e.preventDefault();
                alert("Спасибо, ваш голос засчитан!")
            })
        }
    }
}

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = DataHandler;
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();