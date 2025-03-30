import "./assets/styles/style.css";
import "./assets/styles/todoProps.css"
import { lists } from "./modules/classes/listClass";
import { renderLists, displayList } from "./modules/renderDOM";
import { loadUserLists, saveData } from "./modules/local_storage/localStorageHandler";

export let lastOpenListIndex;

export function setLastOpenlistIndex(index) {
    lastOpenListIndex = index;
    saveData();
}

window.addEventListener("DOMContentLoaded", () => {
    loadUserLists();
    renderLists(lists);
    // console.log(lists[0]);
    displayList(lists[lastOpenListIndex]);
})
