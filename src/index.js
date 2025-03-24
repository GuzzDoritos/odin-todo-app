import "./assets/styles/style.css";
import "./assets/styles/todoProps.css"
import createList, { lists } from "./modules/classes/listClass";
import { renderLists, displayList } from "./modules/renderDOM";
import { add } from "date-fns";
import { HIGH } from "./modules/classes/todoClass";

let defaultTodoDeleted = false;
let defaultTodoCreated = false;

function addDefaultTodo() {
    if (defaultTodoCreated || defaultTodoDeleted) return;

    const defaultList = createList("Default");
    const date = new Date();
    defaultList.addTodo("Create a new to-do!", "Press on the button that is somewhere in this page to create a new to-do task.", add(date, {days: 1}), HIGH);
    defaultTodoCreated = true;
}


window.addEventListener("DOMContentLoaded", () => {
    addDefaultTodo();
    renderLists(lists);
    displayList(lists[0])
})
