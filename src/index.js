import "./style.css";
import UI from "./modules/UI";
import TodoList from "./modules/TodoList";
import Task from "./modules/Task";
import Project from "./modules/Project";
import Storage from "./modules/Storage";

document.addEventListener("DOMContentLoaded", UI.loadHomepage);

// Testing
let todolist1 = Storage.getTodoList();

const project1 = todolist1.getProject(0);

Storage.saveTodoList(todolist1);
