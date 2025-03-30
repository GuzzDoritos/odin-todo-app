import { format } from "date-fns";
import { displayList } from "../renderDOM";
import { setInnerPropValue, showExpandedTodo } from "./expandTodo";
import dateFormatter from "../dateFormatter";
import { createPriorityInput } from "./createInput";
import { saveData } from "../local_storage/localStorageHandler";

export default function editTodoProperty(propValueDiv, prop, todo, list, expandedTodoDiv) {
    propValueDiv.replaceChildren();

    let inputBox = document.createElement("input");
    inputBox.className = "edit-input";

    const configureInputBox = () => {
        switch (prop) {
            case `title`:
            case `description`:
                inputBox.type = "text";
                inputBox.value = todo[prop];
                break;
            case `dueDate`:
                inputBox.type = "date";
                inputBox.value = format(todo[prop], "yyyy-MM-dd");
                // propValueDiv.append(inputBox);
                break;
            case `priority`:
                inputBox = createPriorityInput().selectInput;
                inputBox.className = "edit-input";
                // propValueDiv.append(inputBox.input);
                break;
        }
    }

    configureInputBox();

    const okButton = document.createElement("button");
    okButton.className = "edit-ok-button";
    okButton.textContent = "OK";

    propValueDiv.append(inputBox, okButton);

    inputBox.focus();
    if (prop === `dueDate`) inputBox.showPicker();
    if (prop !== `priority`) inputBox.select();


    okButton.addEventListener("click", submit);
    inputBox.addEventListener("keydown", (e) => {if(e.key === "Enter") submit()});

    function submit() {
        let newValue;
        if (inputBox.value.trim() === "" && prop === `description`) {
            newValue = "No description provided";
        } else if (inputBox.value.trim() === "") {
            return;
        } else {
            newValue = getNewValue();
        }
        function getNewValue() {
            switch(prop) {
                case `title`:
                case `description`:
                    return inputBox.value;
                case `dueDate`:
                    const formattedDate = dateFormatter(inputBox.value);
                    return formattedDate;
                case `priority`:
                    return Number.parseInt(inputBox.value);
            }
        } 
        todo[prop] = newValue;
        
        saveData();
        displayList(list);
    }
}
