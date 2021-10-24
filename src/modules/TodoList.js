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

    addProject(newProject) {
        // Check if a name has been given
        if (newProject.getName() === undefined) {
            newProject.setName(this.getDefaultProjectName());
        }

        // Check if Project already exists
        if (this.projects.find((project) => project.getName() === newProject.getName())) {
            return;
        }

        this.projects.push(newProject);
    }
    removeProject(x) {
        if (typeof x === "string") {
            this.projects = this.projects.filter((project) => project.getName() !== x);
        } else if (typeof x === "number") {
            this.projects.splice(x, 1);
        } else if (typeof x === "object" || x instanceof Project) {
            this.projects = this.projects.filter((project) => project !== x);
        }
    }

    setProjects(newProjects) {
        this.projects = newProjects;
    }
    getProjects() {
        return this.projects;
    }

    getProject(x) {
        if (typeof x === "string") {
            return this.projects.find((project) => project.getName() === x);
        } else if (typeof x === "number") {
            if (x > -1) {
                return this.projects[x];
            }
        } else if (typeof x === "object") {
            if (x instanceof Project) {
                return this.projects.find((project) => project.getName() === x.getName());
            }
        }

        return;
    }

    getDefaultProjectName() {
        let count = 1;
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].getName() === `Project${count}`) {
                count++;
                i = -1;
            }
        }
        return `Project${count}`;
    }
}
