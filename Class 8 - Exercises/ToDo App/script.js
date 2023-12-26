let todos = [];

function createList() {
    let list = document.getElementById("list");

    list.innerHTML = "";

    todos.forEach((task) => {
        let listItem = document.createElement("li");

        listItem.style.border = "1px solid black";

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
            task.isCompleted = checkbox.checked;
            if (checkbox.checked) {
                taskNameSpan.style.textDecoration = "line-through";
            } else {
                taskNameSpan.style.textDecoration = "none";
            }
        });

        let taskNameSpan = document.createElement("span");
        taskNameSpan.textContent = task.name;

        listItem.appendChild(checkbox);
        listItem.appendChild(taskNameSpan);

        list.appendChild(listItem);
    });
}


function addTask() {
    let taskName = document.getElementById("task").value;

    let newTask = {
        name: taskName,
        isCompleted: false
    };

    todos.push(newTask);

    document.getElementById("task").value = "";

    createList();
}

document.getElementById("btn").addEventListener("click", addTask);