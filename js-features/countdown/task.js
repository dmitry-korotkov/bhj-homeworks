"use strict"

const seconds = document.getElementById("timer");
function timer () {
	if(seconds.textContent == 1) {
		alert("Вы победили в конкурсе");
		seconds.textContent = 10;
	} else {
		seconds.textContent--;
	}			
}

setInterval (timer, 1000);