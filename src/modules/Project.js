import Task from './Task';

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
    if (newTask.getName() === undefined || newTask.getName().trim().length === 0) {
      // i decided to not add a new task, since a new task without a name is essentially wortless
      return;

      // Use this to get default name
      // newTask.setName(this.getDefaultTaskName());
    }
    this.tasks.push(newTask);
  }

  /**
   *
   * @param {*} x Number/String/Task
   * @returns NEw tasks Array
   */
  removeTask(x) {
    if (typeof x === 'string') {
      this.tasks = this.tasks.filter((task) => task.getName() !== x);
    } else if (typeof x === 'number') {
      this.tasks.splice(x, 1);
    } else if (typeof x === 'object') {
      if (x instanceof Task) {
        this.tasks = this.tasks.filter((task) => task !== x);
      }
    }

    return this.tasks;
  }

  setName(newProjectName) {
    this.name = newProjectName;
  }

  getName() {
    return this.name;
  }

  setTasks(newTasks) {
    this.tasks = newTasks;
  }

  getTasks() {
    return this.tasks;
  }

  getTask(x) {
    let taskToReturn;
    if (typeof x === 'string') {
      taskToReturn = this.tasks.find((task) => task.getName() === x);
    }
    if (typeof x === 'number') {
      if (x > -1) {
        taskToReturn = this.tasks[x];
      }
    } else if (typeof x === 'object') {
      if (x instanceof Task) {
        taskToReturn = this.tasks.find((task) => task === x);
      }
    }
    return taskToReturn;
  }

  getDefaultTaskName() {
    let count = 1;
    for (let i = 0; i < this.tasks.length; i += 1) {
      if (this.tasks[i].getName() === `Task${count}`) {
        count += 1;
        i = -1;
      }
    }
    return `Task${count}`;
  }
}
