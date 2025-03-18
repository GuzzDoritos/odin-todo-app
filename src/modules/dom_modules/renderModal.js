import { createInput, createPriorityInput } from "./createInput"
import createList, {lists} from "../classes/listClass";
import { renderLists } from "../renderDOM";

export function renderListCreatorModal(modal) {
    modal.showModal();
    modal.replaceChildren();    

    const message = document.createElement("p");
    const nameInput = createInput("Name", "name-input", "text");
    const addBtn = document.createElement("button");

    addBtn.textContent = "Add List";
    addBtn.addEventListener("click", () => {
        message.textContent = "";
        const name = nameInput.input.value;
        if (name.trim() === "") {
            message.textContent = "The list name cannot be blank.";
            return;
        };

        createList(name);

        renderLists(lists);        
        modal.close();
    })

    modal.appendChild(message);
    modal.appendChild(nameInput.label);    
    modal.appendChild(addBtn);
}

export function renderTodoCreatorModal(modal) {
    modal.showModal();
    modal.replaceChildren();

    const message = document.createElement("p");
    const titleInput = createInput("Title", "title-input", "text");
    const descriptionInput = createInput("Description", "description-input", "text");
    const dueDateInput = createInput("Due date:", "due-date-input", "date");
    const priorityInput = createPriorityInput()

    modal.appendChild(message);
    modal.appendChild(titleInput.label);
    modal.appendChild(descriptionInput.label);
    modal.appendChild(dueDateInput.label);
    modal.appendChild(priorityInput.label);
}