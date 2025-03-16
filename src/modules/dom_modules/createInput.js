export function createTextInput(labelName, inputName) {
    const label = document.createElement("label");
    label.htmlFor = inputName;
    label.textContent = labelName;

    const input = document.createElement("input");
    input.type = "text";
    input.name = inputName;
    input.id = inputName;

    label.appendChild(input);

    return {label, input};
}