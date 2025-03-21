import { HIGH, LOW } from "../classes/todoClass";

export default function validateInput(value, type) { //type: text, date or priority
    let isValueValid;
    if (type === "priority") {
        isValueValid = value <= HIGH && value >= LOW;
    }
    if (!isValueValid) return 0;
    else return 1;
}; 