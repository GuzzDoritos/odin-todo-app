import { displayList } from "../renderDOM";

export default function pressDeleteTodo(todo, list) {
    list.deleteTodo(todo.id);
    displayList(list)
}