import { differenceInDays, format } from "date-fns";
import { createExpandedTodoDiv, showExpandedTodo } from "./expandTodo";
import { saveData } from "../local_storage/localStorageHandler";

export default function createTodoDiv(todo, list) {
    const todoDiv = document.createElement("div");
    todoDiv.classList = todo.isDone ? "todo-div todo-done" : "todo-div";

    const todoDivHeader = document.createElement("div");
    todoDivHeader.className = "todo-div-header";

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
    // todoDate.textContent = format(todo.dueDate, "dd/MM/yyyy") + " - " + "in " + (differenceInDays(todo.dueDate, new Date()) + 1) + " day(s).";
    const remainingDays = differenceInDays(todo.dueDate, new Date().setHours(0, 0, 0, 0));
    if (remainingDays > 0) {
        todoDate.textContent = `${format(todo.dueDate, "dd/MM/yyyy")} - due ${remainingDays > 1 ? `in ${differenceInDays(todo.dueDate, new Date()) + 1} days` : "tomorrow"}.`;
    } else if (remainingDays == 0) {
        todoDate.textContent = `${format(todo.dueDate, "dd/MM/yyyy")} - due today.`
    } else {
        todoDate.textContent = `${format(todo.dueDate, "dd/MM/yyyy")} - overdue by ${remainingDays * -1} day${remainingDays * -1 > 1 ? "s" : ""}!`
    }

    textSideDiv.append(todoName, todoDate);

    const expandedTodoDiv = createExpandedTodoDiv(todo, list);


    todoDivHeader.append(buttonSideDiv, textSideDiv);
    todoDiv.append(todoDivHeader, expandedTodoDiv);

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