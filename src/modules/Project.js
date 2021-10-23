import Task from "./Task.js";

export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(newTask) {
        // Check if the Task already exists
        if (this.tasks.find((task) => task.getName() === newTask.getName())) {
            return;
        }
        // Check if a name has been given
        if (newTask.getName() === undefined) {
            // if not, set default name
            newTask.setName(this.currentDefaultName());
        }
        this.tasks.push(newTask);
    }
    removeTask(taskName) {
        this.tasks = this.tasks.filter((task) => task.name !== taskName);
    }

    currentDefaultName() {
        let count = 1;
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].name === `Project${count}`) {
                count++;
                i = -1;
            }
        }
        return `Project${count}`;
    }
}
