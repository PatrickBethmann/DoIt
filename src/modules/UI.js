import Storage from './Storage';
import Project from './Project';
import Task from './Task';

export default class UI {
  // Loading Content
  static body = document.querySelector('body');
  static sidebar = document.querySelector('#sidebar');
  static content = document.querySelector('#content');
  static projectList = document.querySelector('#project-list');
  static currentProject;

  static loadHomepage() {
    UI.loadProjects();
    UI.initDefaultProjects();
    UI.initAddProjectButton();
    UI.openProject('Home');
  }
  static initDefaultProjects() {
    const buttons = document.querySelectorAll('.default-projects-button');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        UI.openProject(button.textContent);
      });
    });
  }
  static loadProjects() {
    this.projectList.innerHTML = '';
    const todoList = Storage.getTodoList();
    todoList.getProjects().forEach((project) => {
      if (project.getName() !== 'Home' && project.getName() !== 'Today' && project.getName() !== 'This Week') {
        UI.addProject(project);
      }
    });
  }

  static addProject(project) {
    const container = document.createElement('button');
    container.textContent = project.getName();
    container.classList.add('project-button');
    container.addEventListener('click', () => {
      this.openProject(project);
    });

    const deleteButton = document.createElement('button');
    deleteButton.addEventListener('click', (e) => {
      e.stopPropagation();
      Storage.removeProject(project.getName());
      this.loadProjects();
    });
    deleteButton.innerHTML = `<span class="material-icons">clear</span>`;
    deleteButton.classList.add('button-delete-project');

    container.appendChild(deleteButton);

    this.projectList.appendChild(container);
  }
  static addTask(task) {
    const container = document.createElement('div');
    container.classList.add('task');
    container.setAttribute('taskname', task.getName());

    const taskName = document.createElement('h3');
    taskName.textContent = task.getName();
    taskName.classList.add('task-name');

    const buttonCompleteTask = document.createElement('button');
    buttonCompleteTask.classList.add('button-complete-task');
    buttonCompleteTask.innerHTML = `<span class="material-icons">radio_button_unchecked</span>`;
    buttonCompleteTask.setAttribute('data-completed', 'false');

    //const buttonEditTask = document.createElement("button");
    //buttonEditTask.classList.add("button-edit-task");
    //buttonEditTask.innerHTML = `<span class="material-icons">edit</span>`;
    const dueDate = document.createElement('p');
    dueDate.textContent = 'No Date';
    dueDate.classList.add('due-date');
    dueDate.addEventListener('click', () => {
      dueDateInput.hidden = false;
      dueDate.hidden = true;
    });

    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.hidden = true;
    dueDateInput.classList.add('due-date-input');
    dueDateInput.addEventListener('change', () => {
      dueDateInput.hidden = true;
      dueDate.hidden = false;
      this.setTaskDate(task, dueDateInput.value);
    });

    const buttonRemoveTask = document.createElement('button');
    buttonRemoveTask.classList.add('button-remove-task');
    buttonRemoveTask.innerHTML = `<span class="material-icons">clear</span>`;

    container.append(buttonCompleteTask, taskName, dueDate, dueDateInput, buttonRemoveTask);
    this.content.appendChild(container);
  }
  static openProject(projectName) {
    // Clear content-div
    this.content.innerHTML = '';
    this.currentProject = Storage.getTodoList().getProject(projectName);
    const project = Storage.getTodoList().getProject(projectName);

    project.getTasks().forEach((task) => {
      this.addTask(task);
    });

    const addTaskButton = document.createElement('button');
    addTaskButton.classList.add('button-add-task');
    addTaskButton.innerHTML = `<i class="button-add-task-icon">O</i> <h3 button-add-task-title>Add Task</h3> `;
    addTaskButton.addEventListener('click', () => {
      console.log('adding task');
      UI.openAddTaskPopup();
    });

    this.content.appendChild(this.getAddTaskButton());
    this.initTaskButtons(project);
  }

  static getAddTaskButton() {
    const addTaskButton = document.createElement('button');
    addTaskButton.classList.add('button-add-task');
    addTaskButton.innerHTML = `<i class="button-add-task-icon"><span class="material-icons">add</span></i> <h3 button-add-task-title>Add Task</h3> `;
    addTaskButton.addEventListener('click', () => {
      console.log('adding task');
      UI.openAddTaskPopup();
    });
    return addTaskButton;
  }
  static getAddTaskPopup() {
    const popup = document.createElement('div');
    popup.classList.add('add-task-popup');

    const textInput = document.createElement('input');
    textInput.setAttribute('type', 'text');
    textInput.classList.add('add-task-popup-input');

    const buttons = document.createElement('div');
    buttons.classList.add('add-task-popup-buttons');

    const buttonAdd = document.createElement('button');
    buttonAdd.textContent = 'Add';
    buttonAdd.classList.add('add-task-popup-add');
    buttons.appendChild(buttonAdd);
    buttonAdd.addEventListener('click', () => {
      const input = document.querySelector('.add-task-popup-input');
      const newTask = new Task(input.value);
      Storage.addTask(this.currentProject, newTask); // Saves new Task
      this.addTask(newTask); // Displays new Task

      this.closeAddTaskPopup(); // closes the popup
      this.openProject(this.currentProject);
    });

    const buttonCancel = document.createElement('button');
    buttonCancel.textContent = 'Cancel';
    buttonCancel.classList.add('add-task-popup-cancel');
    buttons.appendChild(buttonCancel);
    buttonCancel.addEventListener('click', () => {
      this.closeAddTaskPopup();
    });

    popup.append(textInput, buttons);

    return popup;
  }
  static initTaskButtons(project) {
    const removeButtons = document.querySelectorAll('.button-remove-task');
    const editButtons = document.querySelectorAll('.button-edit-task');
    const completedButtons = document.querySelectorAll('.button-complete-task');

    for (let i = 0; i < project.getTasks().length; i++) {
      removeButtons[i].addEventListener('click', () => {
        Storage.removeTask(project, project.getTask(i).getName());
        UI.openProject(project);
      });
      //editButtons[i].addEventListener("click", () => {
      //    console.log("Editing task " + project.getTask(i).getName());
      //});
      completedButtons[i].addEventListener('click', () => {
        /* This can be used to delete completed task when checked
                Storage.removeTask(project, project.getTask(i).getName());
                UI.openProject(project);
                */

        if (completedButtons[i].getAttribute('data-completed') === 'false') {
          completedButtons[i].innerHTML = `<span class="material-icons">check_circle_outline</span>`;
          completedButtons[i].setAttribute('data-completed', 'true');
        } else {
          completedButtons[i].innerHTML = `<span class="material-icons">radio_button_unchecked</span>`;
          completedButtons[i].setAttribute('data-completed', 'false');
        }
      });
    }
  }
  static openAddTaskPopup() {
    document.querySelector('.button-add-task').remove();
    this.content.appendChild(this.getAddTaskPopup());
  }
  static closeAddTaskPopup() {
    document.querySelector('.add-task-popup').remove();
    this.content.append(this.getAddTaskButton());
  }
  static initAddProjectButton() {
    const addProjectButton = document.querySelector('.add-project-button');
    addProjectButton.addEventListener('click', () => {
      //Storage.addProject(new Project());
      //console.log(Storage.getTodoList().getProjects());
      //this.loadProjects();
      this.openAddProjectPopup();
    });
  }
  static getAddProjectPopup() {
    const popup = document.createElement('div');
    popup.classList.add('add-project-popup');

    const textInput = document.createElement('input');
    textInput.setAttribute('type', 'text');
    textInput.classList.add('add-project-popup-input');

    const buttons = document.createElement('div');
    buttons.classList.add('add-project-popup-buttons');

    const buttonAdd = document.createElement('button');
    buttonAdd.textContent = 'Add';
    buttonAdd.classList.add('add-project-popup-add');
    buttons.appendChild(buttonAdd);
    buttonAdd.addEventListener('click', () => {
      const input = document.querySelector('.add-project-popup-input');
      console.log('hi' + input.value + 'hi');
      const newProject = new Project(input.value);
      Storage.addProject(newProject); // Saves new Project
      this.addProject(newProject); // Displays new Project

      this.closeAddProjectPopup(); // closes the popup
      this.openProject(newProject);
    });

    const buttonCancel = document.createElement('button');
    buttonCancel.textContent = 'Cancel';
    buttonCancel.classList.add('add-project-popup-cancel');
    buttons.appendChild(buttonCancel);
    buttonCancel.addEventListener('click', () => {
      this.closeAddProjectPopup();
    });

    popup.append(textInput, buttons);

    return popup;
  }
  static openAddProjectPopup() {
    const addProjectButton = document.querySelector('.add-project-button');
    addProjectButton.remove();

    const nav = document.querySelector('nav');
    nav.appendChild(this.getAddProjectPopup());
  }
  static closeAddProjectPopup() {
    document.querySelector('.add-project-popup').remove();

    const addProjectButton = document.createElement('button');
    addProjectButton.classList.add('add-project-button');
    addProjectButton.innerHTML = `<h3>Add Project</h3>`;

    document.querySelector('nav').appendChild(addProjectButton);
    this.initAddProjectButton();
  }

  static setTaskDate(task, date) {
    const currentTask = document.querySelector(`div[taskname="${task.getName()}"]`);
    console.log(currentTask.childNodes.item(2));
    currentTask.childNodes.item(2).textContent = new Date().toLocaleDateString('de-DE');
    Storage.getTodoList().getProject(this.currentProject).getTask(task.getName()).setDueDate();
  }
}
