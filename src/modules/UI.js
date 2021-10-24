import Storage from "./Storage";
import Project from "./Project";
import Task from "./Task";

export default class UI {
    // Loading Content
    static body = document.querySelector("body");
    static sidebar = document.querySelector("#sidebar");
    static content = document.querySelector("#content");
    static projectList = document.querySelector("#project-list");
    static currentProject;

    static loadHomepage() {
        UI.loadProjects();
        UI.initDefaultProjects();
        UI.initAddProjectButton();
        UI.openProject("Home");
    }
    static initDefaultProjects() {
        const buttons = document.querySelectorAll(".default-projects-button");
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                UI.openProject(button.textContent);
            });
        });
    }
    static loadProjects() {
        this.projectList.innerHTML = "";
        const todoList = Storage.getTodoList();
        todoList.getProjects().forEach((project) => {
            if (project.getName() !== "Home" && project.getName() !== "Today" && project.getName() !== "This Week") {
                UI.addProject(project);
            }
        });
    }
    static initAddProjectButton() {
        const addProjectButton = document.querySelector(".add-project-button");
        addProjectButton.addEventListener("click", () => {
            Storage.addProject(new Project());
            console.log(Storage.getTodoList().getProjects());
            this.loadProjects();
        });
    }
    static addProject(project) {
        const container = document.createElement("button");
        container.textContent = project.getName();
        container.classList.add("project-button");
        container.addEventListener("click", () => {
            this.openProject(project);
        });

        const deleteButton = document.createElement("button");
        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation();
            Storage.removeProject(container.textContent);
            this.loadProjects();
        });
        deleteButton.textContent = "";
        deleteButton.classList.add("button-delete-project");

        container.appendChild(deleteButton);

        this.projectList.appendChild(container);
    }
    static addTask(task) {
        const container = document.createElement("div");
        container.classList.add("task");
        container.setAttribute("taskname", task.getName());
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("button-remove-task");

        container.innerHTML = `<button class="button-complete-task" data-completed="false">O</button><h3 class="task-name">${task.getName()}</h3><button class="button-edit-task">O</button>`;
        container.appendChild(deleteButton);
        this.content.appendChild(container);
    }
    static openProject(projectName) {
        // Clear content-div
        this.content.innerHTML = "";
        this.currentProject = Storage.getTodoList().getProject(projectName);
        const project = Storage.getTodoList().getProject(projectName);

        project.getTasks().forEach((task) => {
            this.addTask(task);
        });

        const addTaskButton = document.createElement("button");
        addTaskButton.classList.add("button-add-task");
        addTaskButton.innerHTML = `<i class="button-add-task-icon">O</i> <h3 button-add-task-title>Add Task</h3> `;
        addTaskButton.addEventListener("click", () => {
            console.log("adding task");
            UI.openAddTaskPopup();
        });

        this.content.appendChild(this.getAddTaskButton());
        this.initTaskButtons(project);
    }
    static getAddTaskButton() {
        const addTaskButton = document.createElement("button");
        addTaskButton.classList.add("button-add-task");
        addTaskButton.innerHTML = `<i class="button-add-task-icon">O</i> <h3 button-add-task-title>Add Task</h3> `;
        addTaskButton.addEventListener("click", () => {
            console.log("adding task");
            UI.openAddTaskPopup();
        });
        return addTaskButton;
    }
    static getAddTaskPopup() {
        const popup = document.createElement("div");
        popup.classList.add("add-task-popup");

        const textInput = document.createElement("input");
        textInput.setAttribute("type", "text");
        textInput.classList.add("add-task-popup-input");

        const buttons = document.createElement("div");
        buttons.classList.add("add-task-popup-buttons");

        const buttonAdd = document.createElement("button");
        buttonAdd.textContent = "Add";
        buttonAdd.classList.add("add-task-popup-add");
        buttons.appendChild(buttonAdd);
        buttonAdd.addEventListener("click", () => {
            const input = document.querySelector(".add-task-popup-input");
            const newTask = new Task(input.value);
            Storage.addTask(this.currentProject, newTask); // Saves new Task
            this.addTask(newTask); // Displays new Task

            this.closeAddTaskPopup(); // closes the popup
            this.openProject(this.currentProject);
        });

        const buttonCancel = document.createElement("button");
        buttonCancel.textContent = "Cancel";
        buttonCancel.classList.add("add-task-popup-cancel");
        buttons.appendChild(buttonCancel);
        buttonCancel.addEventListener("click", () => {
            this.closeAddTaskPopup();
        });

        popup.append(textInput, buttons);

        return popup;
    }
    static initTaskButtons(project) {
        const removeButtons = document.querySelectorAll(".button-remove-task");
        const editButtons = document.querySelectorAll(".button-edit-task");
        const completedButtons = document.querySelectorAll(".button-complete-task");

        for (let i = 0; i < project.getTasks().length; i++) {
            removeButtons[i].addEventListener("click", () => {
                Storage.removeTask(project, project.getTask(i).getName());
                UI.openProject(project);
            });
            editButtons[i].addEventListener("click", () => {
                console.log("Editing task " + project.getTask(i).getName());
            });
            completedButtons[i].addEventListener("click", () => {
                if (completedButtons[i].getAttribute("data-completed") === "false") {
                    completedButtons[i].textContent = "^^";
                    completedButtons[i].setAttribute("data-completed", "true");
                } else {
                    completedButtons[i].textContent = "O";
                    completedButtons[i].setAttribute("data-completed", "false");
                }
            });
        }
    }
    static openAddTaskPopup() {
        document.querySelector(".button-add-task").remove();
        this.content.appendChild(this.getAddTaskPopup());
    }
    static closeAddTaskPopup() {
        document.querySelector(".add-task-popup").remove();
        this.content.append(this.getAddTaskButton());
    }
}
