"use strict"

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function reload () {
    dead.textContent = 0;
    lost.textContent = 0;  
}

function getHole(index) {
    return document.getElementById(`hole${index}`)
}

for (let i = 1; i < 10; i++) {
    const hole = getHole(i);
    hole.onclick = function () {
        if (hole.className.includes('hole_has-mole')) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }

        if (dead.textContent == 10) {
            alert('Победа!');
            reload();
        }

        if (lost.textContent == 5) {
            alert('Вы проиграли!');
            reload()
        }
    }
}