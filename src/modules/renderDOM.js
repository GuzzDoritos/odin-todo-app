// cache DOM

import createList, { lists } from "./classes/listClass";
import { createTextInput } from "./dom_modules/createInput";

const listsList = document.querySelector("#lists-list");
const todoDisplay = document.querySelector("#todo-display");
const modal = document.querySelector("#create");

export function renderLists(lists) {
    listsList.replaceChildren();
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

export function displayList(list) {
    todoDisplay.replaceChildren();

    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "Add Task";
    addTaskBtn.className = "add-task-btn";


    todoDisplay.appendChild(addTaskBtn)
    // addTaskBtn.addEventListener("click");

    const todoList = list.todoList;
    
    for (const todo of todoList) {
        const todoDiv = createTodoDiv(todo)

        todoDisplay.appendChild(todoDiv);
    }
}

function createTodoDiv(todo) {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo-div";

    const todoName = document.createElement("h3");
    const todoDescription = document.createElement("p");
    const todoDate = document.createElement("p");
    const openTodo = document.createElement("button");

    todoName.textContent = todo.title;
    todoDescription.textContent = todo.description;
    todoDate.textContent = todo.dueDate;
    openTodo.textContent = "Open Todo";

    todoDiv.appendChild(todoName);
    todoDiv.appendChild(todoDescription);
    todoDiv.appendChild(todoDate);
    todoDiv.appendChild(openTodo);

    return todoDiv;
}

export function renderListCreatorModal() {
    modal.showModal();
    modal.replaceChildren();    

    const message = document.createElement("p");

    modal.appendChild(message);

    const nameInput = createTextInput("Name", "name-input");
    
    modal.appendChild(nameInput.label);

    const addBtn = document.createElement("button");
    addBtn.textContent = "Add List";
    addBtn.addEventListener("click", () => {
        message.textContent = "";
        const name = nameInput.input.value;
        if (name.trim() === "") {
            message.textContent = "The list name cannot be blank.";
            return;
        };
        createList(name);

        renderLists(lists);
        
        modal.close();
    })
    
    modal.appendChild(addBtn);
}