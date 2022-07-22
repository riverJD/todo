import './style.css';
import { getUrgency, Task} from './todo.js';
import { Project } from './project';
import { addProjectButton, createListeners, renderProject, renderTask } from './interface';


const destDate = ("7/25/2022");

const test = Task("New ggTitle", destDate, 3, "Test Description");
const test2 = Task("Second Task", destDate, 1, "Nothin rly")
//const restProject = Project("PROJECTO", destDate, 2, "Project Scription")
const testProject = Project("Project Title", destDate, 2, "PROJECT DESCRIPTION")

const altProject = Project();



altProject.tasks.addTask(test)
altProject.tasks.addTask(test2)

testProject.tasks.addTask(test)


const content = document.querySelector("#content");


//const testProj = renderProject(testProject);


const NEWPROJ = Project();


NEWPROJ.tasks.addTask(Task());
NEWPROJ.tasks.addTask(test2);


renderProject(NEWPROJ);



//content.append(testProj)



