// cache DOM

import { differenceInDays, format, parse, parseISO } from "date-fns";
import { renderListCreatorModal, renderTodoCreatorModal } from "./dom_modules/renderModal";
import createTodoDiv from "./dom_modules/createTodoDiv";

const addListBtn = document.querySelector("#add-list");
const listsList = document.querySelector("#lists-list");
const todoDisplay = document.querySelector("#todo-display");
const modal = document.querySelector("#create");

addListBtn.addEventListener("click", () => {renderListCreatorModal(modal)});

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

    const addTodoBtn = document.createElement("button");
    addTodoBtn.textContent = "Add Todo";
    addTodoBtn.className = "add-todo-btn";

    todoDisplay.appendChild(addTodoBtn);
    addTodoBtn.addEventListener("click", () => {renderTodoCreatorModal(modal, list)});

    const todoList = list.todoList;
    
    for (const todo of todoList) {
        const todoDiv = createTodoDiv(todo)

        todoDisplay.appendChild(todoDiv);
    }
}