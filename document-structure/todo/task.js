let taskInput = document.getElementById("task__input");
let tasksAddButton = document.getElementById('tasks__add');
let tasksList = document.getElementById("tasks__list");

function createTask () {
    let task = `<div class="task">
                        <div class="task__title">${taskInput.value.trim()}
                        </div>
                        <a href="#" class="task__remove">&times;</a>
                    </div>`;
    tasksList.insertAdjacentHTML("beforeend", task);
    taskInput.value = "";
}

taskInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter" && taskInput.value !== "") {
        event.preventDefault();
        createTask ();   
    }
})

tasksAddButton.addEventListener("click", (event) => {
    if (taskInput.value !== "") {
        event.preventDefault();
        createTask ();
    }
    
})
tasksList.addEventListener('click', (e) => {
    if (e.target.classList.contains('task__remove')) {
        e.target.closest('.task').remove();
    }
});


