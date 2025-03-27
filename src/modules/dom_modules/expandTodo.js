import { format } from "date-fns";
import { HIGH, LOW, MEDIUM } from "../classes/todoClass";
import pressDeleteTodo from "./pressDeleteTodo";

export function createExpandedTodoDiv(todo, list) {
    // Create parent element
    const expandedTodoDiv = document.createElement("div");
    expandedTodoDiv.className = "expanded-todo-div";
    expandedTodoDiv.id = todo.id;

    // Logic for changing text color for priority
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
    
    // Object with the todo properties for appending to the div
    const todoProps = {
        "Title:": todo.title,
        "Description:": todo.description,
        "Due date:": format(todo.dueDate, "dd/MM/yyyy"),
        "Priority:": priorityText()
    }

    // create elements for the properties and append them to the expanded todo div
    for (const prop in todoProps) {
        const propRow = document.createElement("div");
        propRow.classList = "todo-prop-row";
        
        const propName = document.createElement("div")
        propName.classList = "todo-prop-name";
        propName.textContent = `${prop}`;

        const propValue = document.createElement("div");
        propValue.classList = "todo-prop-value";
        propValue.innerHTML = `${todoProps[prop]}`;

        propRow.append(propName, propValue);

        expandedTodoDiv.append(propRow);
    }    

    // Create delete button
    const deleteTodo = document.createElement("button");
    deleteTodo.textContent = "Delete todo";
    
    deleteTodo.addEventListener("click", () => pressDeleteTodo(todo, list));

    // Append deleteButton element to parent
    expandedTodoDiv.append(deleteTodo);

    return expandedTodoDiv;
}

export function setInnerPropValue(prop, todo) {

    // Logic for changing text color for priority
    const priorityText = () => {
        let text;
        switch (todo.priority) {
            case LOW:
                text = '<span style="color: blue" class="priority-display">Low</span>';
                break;
            case MEDIUM:
                text = '<span style="color: yellow" class="priority-display">Medium</span>';
                break;
            case HIGH:
                text = '<span style="color: red" class="priority-display">High</span>';
                break;
        }
        return text;
    }

    let innerPropValue;
    if (todo[prop] === todo.dueDate) {
        innerPropValue = format(todo.dueDate, "dd/MM/yyyy");
    } else if (todo[prop] === todo.priority) {
        innerPropValue = priorityText();
    } else {
        innerPropValue = todo[prop];
    }
    return innerPropValue;
}

export function showExpandedTodo(expandedTodoDiv) {
    expandedTodoDiv.classList.toggle("show");
}
