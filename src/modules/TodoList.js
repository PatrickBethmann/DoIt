import Project from "./Project";
import Task from "./Task";

// Main Todo-List Module

export default class TodoList {
    constructor() {
        this.projects = [];
        this.projects.push(new Project("Home"));
        this.projects.push(new Project("Today"));
        this.projects.push(new Project("This week"));
    }

    addProject() {}
    removeProject() {}
}
