import "./Project.js";
import Project from "./Project";
import TodoList from "./TodoList";
import Task from "./Task.js";

// Module for storing the data
const todoList1 = new TodoList();

const testProject = todoList1.projects[0];

testProject.addTask(new Task());
testProject.addTask(new Task());
testProject.addTask(new Task());
testProject.addTask(new Task());

console.log(testProject);
