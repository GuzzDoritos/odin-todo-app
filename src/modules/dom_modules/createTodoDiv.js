import { differenceInDays, format } from "date-fns";
import { displayList } from "../renderDOM";
import { lists } from "../classes/listClass";

export default function createTodoDiv(todo) {
    const todoDiv = document.createElement("div");
    todoDiv.classList = todo.isDone ? "todo-div todo-done" : "todo-div";

    const buttonSideDiv = document.createElement("div")
    buttonSideDiv.className = "todo-div-button-side";

    const markAsDoneButton = document.createElement("button");
    markAsDoneButton.className = "mark-as-done-btn";
    markAsDoneButton.textContent = "X";
    markAsDoneButton.addEventListener("click", () => {
        todo.toggleDone();
        displayList(lists.find((obj) => obj.id === todo.listID));
    })

    buttonSideDiv.appendChild(markAsDoneButton);

    const textSideDiv = document.createElement("div");
    textSideDiv.className = "todo-div-text-side";

    const todoName = document.createElement("h3");
    const todoDescription = document.createElement("p");
    const todoDate = document.createElement("p");

    todoName.textContent = todo.title;
    todoDescription.textContent = todo.description;
    todoDate.textContent = format(todo.dueDate, "dd/MM/yyyy") + " - " + "in " + (differenceInDays(todo.dueDate, new Date()) + 1) + " day(s).";

    textSideDiv.append(todoName, todoDescription, todoDate);

    todoDiv.append(buttonSideDiv, textSideDiv)

    return todoDiv;
}