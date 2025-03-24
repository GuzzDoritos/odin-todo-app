import { differenceInDays, format } from "date-fns";
import { createExpandedTodoDiv, showExpandedTodo } from "./expandTodo";

export default function createTodoDiv(todo, list) {
    const todoDiv = document.createElement("div");
    todoDiv.classList = todo.isDone ? "todo-div todo-done" : "todo-div";

    const buttonSideDiv = document.createElement("div")
    buttonSideDiv.className = "todo-div-button-side";

    const markAsDoneButton = document.createElement("button");
    markAsDoneButton.className = "mark-as-done-btn";
    markAsDoneButton.textContent = "X";
    markAsDoneButton.addEventListener("click", () => {
        todo.toggleDone();
        todoDiv.classList.toggle("todo-done")
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

    const expandedTodoDiv = createExpandedTodoDiv(todo, list);

    todoDiv.append(buttonSideDiv, textSideDiv, expandedTodoDiv)


    todoDiv.addEventListener("click", (event) => {
        if (event.target.classList.contains("mark-as-done-btn")) return;
        showExpandedTodo(expandedTodoDiv)
    })
    return todoDiv;
}