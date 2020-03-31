const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.getElementById("chat-widget__input");
const chatWidgetMessages = document.getElementById("chat-widget__messages");
chatWidget.onclick = () => {
    chatWidget.classList.add("chat-widget_active");
}

function currentTime () {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    if (hours < 10) {
        hours = `0${hours}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    return `${hours}:${minutes}`
}


chatWidgetInput.addEventListener("keydown", e => {
    if (event.key === "Enter") {
        let message = chatWidgetInput.value.trim();
        if(message !== "") {
            chatWidgetMessages.innerHTML += 
            `<div class="message message_client">
                <div class="message__time">
                    ${currentTime()}
                </div>
                <div class="message__text">
                ${message}
                </div>
            </div>`;
            chatWidgetInput.value = "";
            robotAnswer()
        }
    }
});


function robotAnswer() {
    let arrayAnswers = [
        "Ясно",
        "Понятно",
        "))",
        "ок"
    ];
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    chatWidgetMessages.innerHTML += 
        `<div class="message">
            <div class="message__time">
                ${currentTime()}
            </div>
            <div class="message__text">
            ${arrayAnswers[getRandomIntInclusive(0, arrayAnswers.length -1)]}
            </div>
        </div>`;

} 
