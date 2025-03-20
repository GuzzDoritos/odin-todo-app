import { differenceInDays, format } from "date-fns";

export default function createTodoDiv(todo) {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo-div";

    const markAsDoneButton = document.createElement("input");
    markAsDoneButton.type = "checkbox";
    markAsDoneButton.className = "mark-as-done-btn";
    markAsDoneButton.addEventListener("click", () => {
        todo.toggleDone();
    })

    const todoName = document.createElement("h3");
    const todoDescription = document.createElement("p");
    const todoDate = document.createElement("p");
    const openTodo = document.createElement("button");

    todoName.textContent = todo.title;
    todoDescription.textContent = todo.description;
    todoDate.textContent = format(todo.dueDate, "dd/MM/yyyy") + " - " + "in " + (differenceInDays(todo.dueDate, new Date()) + 1) + " day(s).";
    openTodo.textContent = "Open Todo";

    todoDiv.appendChild(markAsDoneButton);
    todoDiv.appendChild(todoName);
    todoDiv.appendChild(todoDescription);
    todoDiv.appendChild(todoDate);
    todoDiv.appendChild(openTodo);

    return todoDiv;
}