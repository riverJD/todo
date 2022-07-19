import './style.css';
import { getUrgency, Task} from './todo.js';
import { Project } from './project';


const destDate = new Date("7/25/2022");

const test = Task("New ggTitle", destDate, 3, "Test Description");
const test2 = Task("Seocnd Task", destDate, 1, "Nothin rly")
//const restProject = Project("PROJECTO", destDate, 2, "Project Scription")
const testProject = Project("Project Title", destDate, 2, "PROJECT DESCRIPTION")

const altProject = Project();


console.log(testProject)
console.log(altProject)


altProject.tasks.addTask(test)
altProject.tasks.addTask(test2)

testProject.tasks.addTask(test)

console.log(testProject.content.getTitle())
console.log(altProject.content.getTitle())

console.log(altProject.tasks.getTaskList())
console.log(testProject.tasks.getTaskList())