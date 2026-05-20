let list = document.getElementById("list");

let userItem = [];

userItem.push("harsh");
userItem.push("dhwij");
userItem.push("mayur");

localStorage.setItem("users", JSON.stringify(userItem));

const data = JSON.parse(localStorage.getItem("users"));

data.forEach(element => {
    
    const li = document.createElement("li");

    li.textContent = element;
    list.appendChild(li);
});