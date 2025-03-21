import { format } from "date-fns";
import { HIGH, LOW, MEDIUM } from "../classes/todoClass";

export function createExpandedTodoDiv(todo, todoDiv) {
    // Create parent element
    const expandedTodoDiv = document.createElement("div");
    expandedTodoDiv.className = "expanded-todo-div";
    expandedTodoDiv.id = todo.id;

    // Create child elements
    const todoTitle = document.createElement("p");
    const todoDescription = document.createElement("p");
    const todoDueDate = document.createElement("p");
    const todoPriority = document.createElement("p");

    // Give child elements text content
    todoTitle.textContent = `Title: ${todo.title}`;
    todoDescription.textContent = `Description: ${todo.description}`;
    todoDueDate.textContent = `Due date: ${format(todo.dueDate, "dd/MM/yyyy")}`;
    const priorityText = () => {
        let text;
        switch (todo.priority) {
            case LOW:
                text = '<span style="color: blue">Low</span>';
                break;
            case MEDIUM:
                text = '<span style="color: yellow">Medium</span>';
                break;
            case HIGH:
                text = '<span style="color: red">High</span>';
                break;
        }
        return text;
    }
    todoPriority.innerHTML = `Priority: ${priorityText()}`;

    // Append child elements to parent
    expandedTodoDiv.append(todoTitle, todoDescription, todoDueDate, todoPriority);

    return expandedTodoDiv;
}

export function showExpandedTodo(expandedTodoDiv) {
    expandedTodoDiv.classList.toggle("show");
}
