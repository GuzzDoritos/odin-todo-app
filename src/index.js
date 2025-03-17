import "./style.css";
import dateFormatter from "./modules/dateFormatter"
import createList, { lists, deleteList } from "./modules/classes/listClass";
import { renderLists, renderListCreatorModal, displayList } from "./modules/renderDOM";
import { format, add } from "date-fns";

let defaultTodoDeleted = false;
let defaultTodoCreated = false;

function addDefaultTodo() {
    if (defaultTodoCreated || defaultTodoDeleted) return;

    const defaultList = createList("Default");
    const date = new Date();
    defaultList.addTodo("Create a new to-do!", "Press on the button that is somewhere in this page to create a new to-do task.", add(date, {days: 1}), "normal");
    defaultTodoCreated = true;
}


window.addEventListener("DOMContentLoaded", () => {
    addDefaultTodo();
    renderLists(lists);
    displayList(lists[0])
})
