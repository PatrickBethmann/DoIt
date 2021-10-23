// Task Class
export default class Task {
    constructor(name, description = "no description", dueDate = "No date") {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
    }

    setName(newTaskName) {
        this.name = newTaskName;
    }
    getName() {
        return this.name;
    }
    setDescription(newDescription) {
        this.description = this.description;
    }
    getDescription() {
        return this.description;
    }
    setDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }
}
