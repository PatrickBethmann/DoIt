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
}
