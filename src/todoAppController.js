import Todo from "./todoClass";

export const projects = []

class Project {
    constructor (name) {
        this.name = name;
        this.id = crypto.randomUUID();
        this.todoList = [];
    }

    addTodo(title, description, dueDate, priority) {
        this.todoList.push(new Todo(title, description, dueDate, priority));
    }

    deleteTodo(id) {
        this.todoList.forEach((task, index) => {
            if (task.id === id) {
                this.todoList.splice(index, 1);
                return;
            }
        })
    }

    editProjectName(name) {
        this.name = name;
    }
}

export function deleteProject(id) {
    projects.forEach((project, index) => {
        if (project.id === id) {
            projects.splice(index, 1);
            return;
        }
    })
}

export default function createProject(name) {
    const project = new Project(name);
    projects.push(project);
    return project;
}