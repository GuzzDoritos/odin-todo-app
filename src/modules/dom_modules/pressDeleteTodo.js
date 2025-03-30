import { saveData } from "../local_storage/localStorageHandler";
import { displayList } from "../renderDOM";

export default function pressDeleteTodo(todo, list) {
    list.deleteTodo(todo.id);
    displayList(list)
    saveData();
}