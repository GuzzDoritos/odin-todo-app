// cache DOM

import { differenceInDays, format, parse, parseISO } from "date-fns";
import { renderListCreatorModal, renderTodoCreatorModal } from "./dom_modules/renderModal";

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

function createTodoDiv(todo) {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo-div";

    const todoName = document.createElement("h3");
    const todoDescription = document.createElement("p");
    const todoDate = document.createElement("p");
    const openTodo = document.createElement("button");

    todoName.textContent = todo.title;
    todoDescription.textContent = todo.description;
    todoDate.textContent = format(todo.dueDate, "dd/MM/yyyy") + " - " + "in " + (differenceInDays(todo.dueDate, new Date()) + 1) + " day(s).";
    console.log(todo.dueDate.toLocaleString())
    openTodo.textContent = "Open Todo";

    todoDiv.appendChild(todoName);
    todoDiv.appendChild(todoDescription);
    todoDiv.appendChild(todoDate);
    todoDiv.appendChild(openTodo);

    return todoDiv;
}