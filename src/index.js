import './style.css';
import { getUrgency, Task} from './todo.js';
import { Project } from './project';
import { addProjectButton, createListeners, renderProject, renderTask } from './interface';
import { content, projectContainer } from './content';
import { menu } from './menu';
import { storage } from './settings';

const body = document.querySelector('body');
const main = document.querySelector('#content');


body.insertBefore(menu(), main);
main.appendChild(projectContainer())
main.appendChild(content());

//storage.loadDataFromStorage();


//const testProj = renderProject(testProject);






//const NEWPROJ = Project();




//enderProject(NEWPROJ);



//content.append(testProj)



