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
    const label = createLabel("Priority", "priority-input");

    const selectInput = document.createElement()
}