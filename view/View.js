import { handleDeleteTask, handleEditTask, handleRestoreTask } from "../controller/Controller.js";

const body = document.body;
const themeBtn = document.getElementById("themeBtn");

export function renderTask(tasks) {
    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(tasks => {

        const li = document.createElement("li");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete"
        deleteBtn.classList.add("delete-btn")

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit"
        editBtn.classList.add("edit-btn")

        deleteBtn.onclick = () => {
            handleDeleteTask(tasks.id);
        }

        editBtn.onclick = () => {
            handleEditTask(tasks.id, tasks.title);
        }

        li.innerHTML = `
            <div>
                <span>${tasks.title}</span>
                <span>${tasks.createdAt}</span>
            </div>
        `
        taskList.append(li)
        li.append(editBtn, deleteBtn)

    });
}

export function renderTrashTask(tasks) {

    const trashList = document.getElementById("trashList");

    trashList.innerHTML = "";

    tasks.forEach(tasks => {

        const li = document.createElement("li");

        const restoreBtn = document.createElement("button");
        restoreBtn.textContent = "Restore"
        restoreBtn.classList.add("restore-btn")

        restoreBtn.onclick = () => {
            handleRestoreTask(tasks.id);
        }

        li.innerHTML = `
            <div>
                <span>${tasks.title}</span>
                <span>${tasks.createdAt}</span>
            </div>
        `

        trashList.append(li)
        li.append(restoreBtn)

    })
}

function renderTheme(theme) {
    body.classList.remove("light", "dark")
    body.classList.add(theme)

    if (theme === "light") {
        themeBtn.innerText = "Dark Mode"
    } else {
        themeBtn.innerText = "Light Mode"
    }
}


function bindThemeToggle(handlerFuntion) {
    themeBtn.addEventListener("click", handlerFuntion)
}

export {
    renderTheme,
    bindThemeToggle
}


