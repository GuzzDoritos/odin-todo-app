export default class Todo {
    constructor(title, description, dueDate, priority, projectID) {
        this.id = crypto.randomUUID();
        this.projectID = projectID
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    changeValue(property, value) {
        this[property] = value;
    }    
}