import Storage from "./Storage";
import Project from "./Project";
import Task from "./Task";

export default class UI {
    // Loading Content
    static body = document.querySelector("body");
    static sidebar = document.querySelector("#sidebar");
    static content = document.querySelector("#content");

    static loadHomepage() {
        console.log("Loaded Homepage");
    }

    static displayProject(project) {
        // Reset
        this.content.innerHTML = "";

        // Checks if a project was passed
        if (!(project instanceof Project)) {
            return;
        }

        project.getTasks().forEach((currentTask) => {
            // Creating container
            const task = document.createElement("div");
            task.classList.add("task");
            task.setAttribute("data-TaskIndex", project.getTasks().indexOf(currentTask));
            // Creating completed-button
            const completedButton = document.createElement("button");
            completedButton.classList.add("completed-button");
            completedButton.textContent = "O";
            task.appendChild(completedButton);

            // Creating Name
            const taskName = document.createElement("h3");
            taskName.textContent = currentTask.getName();
            taskName.classList.add("task-name");
            task.appendChild(taskName);

            // Creating Buttons
            // Edit Button
            const editButton = document.createElement("button");
            editButton.textContent = "O";
            editButton.classList.add("edit-button");
            task.appendChild(editButton);

            // Remove Button
            const removeButton = document.createElement("button");
            removeButton.textContent = "X";
            removeButton.classList.add("remove-button");
            task.appendChild(removeButton);
            removeButton.addEventListener("click", () => {
                project.removeTask(parseInt(task.getAttribute("data-TaskIndex")));
                UI.displayProject(project);
            });

            // Appending to Content div
            this.content.appendChild(task);
        });
    }
}
