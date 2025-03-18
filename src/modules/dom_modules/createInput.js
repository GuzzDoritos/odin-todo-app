import { HIGH, LOW, MEDIUM } from "../classes/todoClass";

export function createInput(labelName, inputName, type) {
    const label = createLabelElement(labelName, inputName);
    
    const input = createInputElement(type, inputName);
    label.appendChild(input);

    return {label, input};
}

function createLabelElement(labelName, inputName) {
    const label = document.createElement("label");
    label.htmlFor = inputName;
    label.textContent = labelName;
    return label;
}

function createInputElement(type, inputName) {
    const input = document.createElement("input");
    input.type = type;
    input.name = inputName;
    input.id = inputName;
    return input;
}

export function createPriorityInput() {
    const label = createLabelElement("Priority", "priority-input");

    const selectInput = document.createElement("select")
    selectInput.name = "priority";
    selectInput.id = "priority";
    
    const lowOption = document.createElement("option");
    const mediumOption = document.createElement("option");
    const highOption = document.createElement("option");
    [lowOption.value, lowOption.textContent] = [LOW, "Low"];
    [mediumOption.value, mediumOption.textContent] = [MEDIUM, "Medium"];
    [highOption.value, highOption.textContent] = [HIGH, "High"];

    selectInput.appendChild(lowOption);
    selectInput.appendChild(mediumOption);
    selectInput.appendChild(highOption);

    label.appendChild(selectInput)

    return {label, lowOption, mediumOption, highOption};
}