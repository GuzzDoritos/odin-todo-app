import { setLastOpenlistIndex } from "../..";
import createList from "../classes/listClass";
import { LAST_OPEN_LIST, USER_DATA } from "./localStorageHandler";

export default function populateStorage() {
    const savedData = JSON.parse(localStorage.getItem(USER_DATA));
    savedData.forEach((list) => {
        const savedList = createList(list.name, list.id);
        list.todoList.forEach((todo, index) => {
            savedList.addTodo(todo.title, todo.description, todo.dueDate, todo.priority, todo.id);
            if (todo.hasOwnProperty("isDone")) {
                savedList[index].isDone = todo.isDone;
            }
        })
    })

    const savedLastOpenList = JSON.parse(localStorage.getItem(LAST_OPEN_LIST));
    setLastOpenlistIndex(savedLastOpenList);
}