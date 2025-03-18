export const HIGH = 2;
export const MEDIUM = 1;
export const LOW = 0;

export default class Todo {
    constructor(title, description, dueDate, priority, listID) {
        this.id = crypto.randomUUID();
        this.listID = listID
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    changeValue(property, value) {
        this[property] = value;
    }    
}