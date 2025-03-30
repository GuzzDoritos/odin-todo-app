// cache DOM

import { renderListCreatorModal, renderTodoCreatorModal } from "./dom_modules/renderModal";
import createTodoDiv from "./dom_modules/createTodoDiv";
import expandTodo from "./dom_modules/expandTodo";
import { setLastOpenlistIndex } from "..";

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
            setLastOpenlistIndex(lists.indexOf(list));
            displayList(list);
        })

        tree.appendChild(listBranch);
    }
    listsList.appendChild(tree);
}

export function displayList(list) {
    todoDisplay.replaceChildren();

    const listTitle = document.createElement("h1");
    listTitle.textContent = list.name;
    listTitle.className = "list-title";

    todoDisplay.appendChild(listTitle);

    const addTodoBtn = document.createElement("button");
    addTodoBtn.textContent = "Add Todo";
    addTodoBtn.className = "add-todo-btn";

    addTodoBtn.addEventListener("click", () => {renderTodoCreatorModal(modal, list)});

    const todoList = list.todoList;
    
    if (todoList.length !== 0) {
        for (const todo of todoList) {
        const todoDiv = createTodoDiv(todo, list)
        todoDisplay.appendChild(todoDiv);
        }
    }

    todoDisplay.appendChild(addTodoBtn);
}