document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text !== "") {
        const task = { text: text, done: false };
        saveTask(task);
        input.value = "";
    }
}

function renderTask(task, index = null) {
    const list = document.getElementById("taskList");
    const li = document.createElement("li");
    if (task.done) li.classList.add("done");

    li.textContent = task.text;

    // Klick auf Aufgabe: erledigt/unerledigt
    li.addEventListener("click", () => {
        task.done = !task.done;
        li.classList.toggle("done");
        updateTask(task, index);
    });

    // Löschen-Button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Löschen";
    delBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // verhindert Toggle auf erledigt
        removeTask(index);
    });

    li.appendChild(delBtn);
    list.appendChild(li);
}

function saveTask(task) {
    const tasks = getTasks();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderAllTasks();
}

function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function renderAllTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";
    const tasks = getTasks();
    tasks.forEach((task, i) => renderTask(task, i));
}

function updateTask(updatedTask, index) {
    const tasks = getTasks();
    tasks[index] = updatedTask;
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderAllTasks();
}

function loadTasks() {
    renderAllTasks();
}
