// cache DOM

const listsList = document.querySelector("#lists-list");
const todoDisplay = document.querySelector("#todo-display")

export function renderLists(lists) {
    const tree = document.createElement("ul");
    for (const list of lists) {
        const listBranch = document.createElement("li");
        listBranch.className = "list-branch";
        listBranch.textContent = list.name;
        listBranch.addEventListener("click", () => {
            displayList(list);
        })

        tree.appendChild(listBranch);
    }
    listsList.appendChild(tree);
}

function displayList(list) {
    todoDisplay.replaceChildren();

    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "Add Task";
    addTaskBtn.className = "add-task-btn";


    todoDisplay.appendChild(addTaskBtn)
    // addTaskBtn.addEventListener("click");

    const todoList = list.todoList;
    
    for (const todo of todoList) {
        const para = document.createElement("p");
        para.textContent = `Name: ${todo.title} || Desc: ${todo.description}`;

        todoDisplay.appendChild(para);
    }

}