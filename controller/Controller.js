
import { addTask, deleteTask, editTask, getTask, getTheme, getTrashTask, loadTheme, restoreTask, saveTheme, searchTask, setTheme, validationTask } from "../model/Model.js";
import { bindThemeToggle, renderTask, renderTheme, renderTrashTask } from "../view/View.js";

let isEditMode = false;
let editId = null;

const inputTask = document.getElementById("inputTask");
const addBtn = document.getElementById("addBtn");
const clearAll = document.getElementById("clearAll");
const serachInput = document.getElementById("searchInput");

export function handleTask() {
    const value = inputTask.value;
    if (value.trim() === "") return;

    if (isEditMode) {

        editTask(editId, value)

        isEditMode = false;
        editId = null;

        addBtn.textContent = "Add";

    } else {

        if (!validationTask(value)) return;

        addTask(value)
    }

    inputTask.value = "";

    renderTask(getTask());
}

export function handleEditTask(id, title) {

    inputTask.value = title;
    inputTask.focus();

    isEditMode = true;
    editId = id;

    addBtn.textContent = "Update";
}

export function handleDeleteTask(id) {
    deleteTask(id)
    renderTask(getTask())
    renderTrashTask(getTrashTask())
}

export function handleRestoreTask(id) {
    restoreTask(id);
    renderTask(getTask())
    renderTrashTask(getTrashTask())
}

addBtn.addEventListener("click", handleTask);

clearAll.addEventListener("click", () => {
    taskList.textContent = "";
})

serachInput.addEventListener("input", () => {

    const value = serachInput.value;

    const filterTask = searchTask(value);

    renderTask(filterTask);
})

// Theme Control

function handleThemeToggle() {
    const currentTheme = getTheme();

    let newTheme = null;

    if (currentTheme === "light") {
        newTheme = "dark";
    } else {
        newTheme = "light"
    }

    setTheme(newTheme);
    saveTheme(newTheme);
    renderTheme(newTheme);
}

function initThemeApp() {
    const savedTheme = loadTheme();

    renderTheme(savedTheme);

    bindThemeToggle(handleThemeToggle)
}

export const themeController = {
    initThemeApp
}


renderTask(getTask());