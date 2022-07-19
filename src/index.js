import './style.css';
import { getUrgency, Task} from './todo.js';
import { Project } from './project';


const destDate = new Date("7/25/2022");

const test = Task("New ggTitle", destDate, 3, "Test Description");
//const restProject = Project("PROJECTO", destDate, 2, "Project Scription")
const restProject = Project(Task("Project Title", destDate, 2, "PROJECT DESCRIPTION"))


for (let items in test){
    console.log(items);
}
console.log(test.content.getContent())


console.log(getUrgency(test));

console.log(test);

console.log("\n\n\n")


restProject.tasks.addTask("one");
restProject.tasks.addTask("FIRSTgg TASK!");
console.log(restProject.tasks.getTaskList())
restProject.tasks.deleteTask("one");
console.log(restProject.tasks.getTaskList())