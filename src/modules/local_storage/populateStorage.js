import { setLastOpenlistIndex } from "../..";
import createList from "../classes/listClass";
import { LAST_OPEN_LIST, USER_DATA } from "./localStorageHandler";

export default function populateStorage() {
    const savedData = JSON.parse(localStorage.getItem(USER_DATA));
    savedData.forEach((list) => {
        const savedList = createList(list.name, list.id);
        list.todoList.forEach(todo => {
            savedList.addTodo(todo.title, todo.description, todo.dueDate, todo.priority, todo.id);
        })
    })

    const savedLastOpenList = JSON.parse(localStorage.getItem(LAST_OPEN_LIST));
    setLastOpenlistIndex(savedLastOpenList);
}