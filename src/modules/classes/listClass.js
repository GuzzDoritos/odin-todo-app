import Todo from "./todoClass";

// Array containing all lists
export let lists = []

class List {
    constructor (name, id) {
        this.name = name;
        this.id = id;
        this.todoList = []; // Array containing all todos in a given list
    }

    addTodo(title, description, dueDate, priority, id) { //Valid priority values: HIGH = 2, MEDIUM = 1, LOW = 0. dueDate is always a Date object
        this.todoList.push(new Todo(title, description, dueDate, priority, id, this.id));
    }

    deleteTodo(id) {
        this.todoList.forEach((task, index) => {
            if (task.id === id) {
                this.todoList.splice(index, 1);
                return;
            }
        })
    }

    editListName(name) {
        this.name = name;
    }
}

export function deleteList(id) {
    lists.forEach((list, index) => {
        if (list.id === id) {
            lists.splice(index, 1);
            return;
        }
    })
}

export default function createList(name, id) {
    const list = new List(name, id);
    lists.push(list);
    return list;
}

export function generateRandomListId() {
    return crypto.randomUUID();
}