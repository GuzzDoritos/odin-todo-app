import { add } from "date-fns";
import createList, { lists } from "../classes/listClass";
import { HIGH } from "../classes/todoClass";
import populateStorage from "./populateStorage";
import { lastOpenListIndex, setLastOpenlistIndex } from "../..";

export const USER_DATA = "userLists";
export const LAST_OPEN_LIST = "lastOpenListIndex";

export function saveData() {
    if (storageAvailable("localStorage")) {
      localStorage.setItem(USER_DATA, JSON.stringify(lists));
      localStorage.setItem(LAST_OPEN_LIST, JSON.stringify(lastOpenListIndex));
    } else {
        console.log("Couldn't save data. Maybe your browser has localStorage disabled?");
        return;
    }
}

export function loadUserLists() {
    if (!localStorage.getItem(USER_DATA)) {
      function addDefaultTodo() {
        const defaultList = createList("Default");
        const date = new Date();
        defaultList.addTodo("Create a new to-do!", "Press on the button that is somewhere in this page to create a new to-do task.", add(date, {days: 1}), HIGH);
        setLastOpenlistIndex(0)
      }
      addDefaultTodo();
      saveData();
    } else {
      populateStorage();
    }
}

function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
}