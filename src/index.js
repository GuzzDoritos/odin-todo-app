import "./style.css";
import dateFormatter from "./modules/dateFormatter"
import createList, { lists, deleteList } from "./modules/classes/listClass";
import { renderLists } from "./modules/renderDOM";

let defaultTodoDeleted = false;
let defaultTodoCreated = false;

function addDefaultTodo() {
    if (defaultTodoCreated || defaultTodoDeleted) return;

    const defaultList = createList("Default");
    defaultList.addTodo("Create a new to-do!", "Press on the button that is somewhere in this page to create a new to-do task.", dateFormatter(16, 5, 2025), "normal");
    defaultTodoCreated = true;
}


window.addEventListener("DOMContentLoaded", () => {
    addDefaultTodo();
    renderLists(lists);
})