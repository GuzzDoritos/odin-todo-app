import { differenceInDays, format } from "date-fns";
import { createExpandedTodoDiv, showExpandedTodo } from "./expandTodo";
import { saveData } from "../local_storage/localStorageHandler";

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
        todoDiv.classList.toggle("todo-done");
        saveData();
    })

    buttonSideDiv.appendChild(markAsDoneButton);

    const textSideDiv = document.createElement("div");
    textSideDiv.className = "todo-div-text-side";

    const todoName = document.createElement("h3");
    const todoDate = document.createElement("p");

    todoName.textContent = todo.title;
    todoDate.textContent = format(todo.dueDate, "dd/MM/yyyy") + " - " + "in " + (differenceInDays(todo.dueDate, new Date()) + 1) + " day(s).";

    textSideDiv.append(todoName, todoDate);

    const expandedTodoDiv = createExpandedTodoDiv(todo, list);

    todoDiv.append(buttonSideDiv, textSideDiv, expandedTodoDiv)


    todoDiv.addEventListener("click", (event) => {
        const exclude = ["mark-as-done-btn", "prop-value-holder", "edit-input", "edit-ok-button", "priority-display"];
        let cancel = false;
        exclude.forEach(ex => {
            if (event.target.classList.contains(ex)) cancel = true;
        })
        if (cancel) return;
        showExpandedTodo(expandedTodoDiv)
    })
    return todoDiv;
}