import { format } from "date-fns";
import { HIGH, LOW, MEDIUM } from "../classes/todoClass";
import pressDeleteTodo from "./pressDeleteTodo";
import 'boxicons';
import editTodoProperty from "./editTodoProperty";

export function createExpandedTodoDiv(todo, list) {
    // Create parent element
    const expandedTodoDiv = document.createElement("div");
    expandedTodoDiv.className = "expanded-todo-div";
    expandedTodoDiv.id = todo.id;

    
    // Object with the todo properties for appending to the div
    const todoPropStrings = ["Title:", "Description:", "Due date:", "Priority:"];
    const orderedTodoProps = [`title`, `description`, `dueDate`, `priority`];

    // create elements for the properties and append them to the expanded todo div
    orderedTodoProps.forEach((prop, index) => {
        const propRow = document.createElement("div");
        propRow.classList = "todo-prop-row";
        
        const propName = document.createElement("div")
        propName.classList = "todo-prop-name";
        propName.textContent = `${todoPropStrings[index]}`;

        const propValueDiv = document.createElement("div");
        propValueDiv.classList = "todo-prop-value";
        
        const propValueHolder = document.createElement("div");
        propValueHolder.className = "prop-value-holder";
        
        const innerPropValue = setInnerPropValue(prop, todo);

        propValueHolder.innerHTML = `${innerPropValue} <box-icon type='solid' name='edit-alt'></box-icon>`;

        propValueDiv.append(propValueHolder);

        propValueHolder.addEventListener("click", () => editTodoProperty(propValueDiv, prop, todo, list, expandedTodoDiv));

        propRow.append(propName, propValueDiv);

        expandedTodoDiv.append(propRow);
    });

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
