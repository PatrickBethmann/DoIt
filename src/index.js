import "./style.css";
import UI from "./modules/UI";
import TodoList from "./modules/TodoList";
import Task from "./modules/Task";
import Project from "./modules/Project";

document.addEventListener("DOMContentLoaded", UI.loadHomepage);

// Testing
const todolist1 = new TodoList();

const project1 = todolist1.getProject(0);

project1.addTask(new Task("Test"));
project1.addTask(new Task());
project1.addTask(new Task("My Amazing Task"));
project1.addTask(new Task());

UI.displayProject(todolist1.getProject(0));
