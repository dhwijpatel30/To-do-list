let manageTask = []
let trashTask = []
let id = 0;

const STORAGE_KEY = "theme";
let currentTheme = "light";

export function addTask(value){
    const taskDetail = {
        id : id++,
        title : value,
        createdAt : new Date().toLocaleString()
    }

    manageTask.unshift(taskDetail);
}

export function getTask(){
    return manageTask;
}

export function getTrashTask(){
    return trashTask;
}

export function validationTask(value){
    if(value.trim() === "") return false;

   if(manageTask.some(task => task.title.toLowerCase() === value.toLowerCase())){
       alert("Task is Already Exist");
       return false;
   }
   return true;
}

export function searchTask(value){
    return manageTask.filter(task => 
        task.title.toLowerCase() === value.toLowerCase()
    )
}

export function deleteTask(id){
    const index = manageTask.findIndex(task => task.id === id)

    if(index !== -1){
        const deleteTask = manageTask.splice(index, 1)[0]

        trashTask.unshift(deleteTask);
    }
}

export function editTask(id, newTitle){
    const task = manageTask.find(task => task.id === id);

    if(task){
        task.title = newTitle;
    }
}

export function restoreTask(id){
    const index = trashTask.findIndex(task => task.id === id)

    if(index !== -1){
        const restoredTask = trashTask.splice(index, 1)[0]

        manageTask.unshift(restoredTask);
    }
}

function getTheme(){
    return currentTheme;
}

function setTheme(theme){
    currentTheme = theme
}

function saveTheme(theme){
    localStorage.setItem(STORAGE_KEY, theme);
}

function loadTheme(){
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if(savedTheme){
        currentTheme = savedTheme;
    }
    return currentTheme
}

export {
    getTheme,
    setTheme,
    saveTheme,
    loadTheme
}

