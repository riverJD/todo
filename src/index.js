import './style.css';
import { getUrgency, Task} from './todo.js';
import { Project } from './project';
import { addProjectButton, createListeners, renderProject, renderTask } from './interface';
import { content } from './content';


const main = document.querySelector('#content');
console.log(main);

main.appendChild(content());



//const testProj = renderProject(testProject);






//const NEWPROJ = Project();




//enderProject(NEWPROJ);



//content.append(testProj)



