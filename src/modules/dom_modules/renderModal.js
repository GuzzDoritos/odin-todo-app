import { createInput, createPriorityInput } from "./createInput"
import createList, {lists} from "../classes/listClass";
import { displayList, renderLists } from "../renderDOM";
import validateInput from "./validateInput";
import { format } from "date-fns";
import dateFormatter from "../dateFormatter";
import { saveData } from "../local_storage/localStorageHandler";

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
        saveData();        
        modal.close();
    })

    modal.appendChild(message);
    modal.appendChild(nameInput.label);    
    modal.appendChild(addBtn);
}

export function renderTodoCreatorModal(modal, list) {
    modal.showModal();
    modal.replaceChildren();

    const message = document.createElement("p");
    const titleInput = createInput("Title", "title-input", "text");
    const descriptionInput = createInput("Description", "description-input", "text");
    const dueDateInput = createInput("Due date:", "due-date-input", "date");
    const priorityInput = createPriorityInput();
    const addBtn = document.createElement("button");

    modal.appendChild(message);
    modal.appendChild(titleInput.label);
    modal.appendChild(descriptionInput.label);
    modal.appendChild(dueDateInput.label);
    modal.appendChild(priorityInput.label);
    modal.appendChild(addBtn);

    addBtn.textContent = "Add To-do";
    addBtn.addEventListener("click", submitForm);

    function submitForm() {
        const title = titleInput.input.value.trim();
        let description = descriptionInput.input.value.trim();
        const dueDateValue = dueDateInput.input.value;
        const priority = priorityInput.selectInput.value;

        if (description === "") description = "No description provided.";

        if (!validateForm(priority, title, dueDateValue)) return;

        const dueDate = dateFormatter(dueDateValue);

        list.addTodo(title, description, dueDate, Number.parseInt(priority));

        modal.replaceChildren();
        modal.close();
        displayList(list);
        saveData();
    }

    function validateForm(priority, title, dueDateValue) {        
        const isPriorityValid = validateInput(Number.parseInt(priority), "priority");

        if (!isPriorityValid || title == "" || dueDateValue == "") return false
        else return true;
    }
}