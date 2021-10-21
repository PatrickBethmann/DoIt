import "./style.css";
import Project from "./project.js";
import Todo from "./todo.js";

const project1 = new Project("first");
const project2 = new Project("Second");
console.log("First", project1);
console.log("Second", project2);

project2.addToDo(
    new Todo("First Entry", "My Description", "27.10.2000", "High")
);
