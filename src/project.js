class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addToDo(todo) {
        this.todos.push(todo);
    }
}

export default Project;
