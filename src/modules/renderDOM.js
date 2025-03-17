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

export function renderListCreatorModal() {
    modal.showModal();

    const nameInput = createTextInput("Name", "name-input");
    
    modal.appendChild(nameInput.label);

    const addBtn = document.createElement("button");
    addBtn.textContent = "Add List";
    addBtn.addEventListener("click", () => {
        const name = nameInput.input.value;
        if (name.trim() === "") return;
        createList(name);

        renderLists(lists);
        modal.replaceChildren();
        modal.close();
    })
    
    modal.appendChild(addBtn);
}