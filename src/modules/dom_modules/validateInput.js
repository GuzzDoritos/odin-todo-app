export default function validateInput(value, type) { //type: text, date or priority
    let isValueValid;
    if (type === "priority") {
        isValueValid = value < 3 && value >= 0;
    }
    if (!isValueValid) return 0;
    else return 1;
}; 