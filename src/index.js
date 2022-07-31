import './style.css';
import { getUrgency, Task} from './todo.js';
import { Project } from './project';
import { addProjectButton, createListeners, renderProject, renderTask } from './interface';
import { content } from './content';
import { menu } from './menu';

const body = document.querySelector('body');
const main = document.querySelector('#content');
body.insertBefore(menu(), main);

main.appendChild(content());


console.log(main.parentNode)


//const testProj = renderProject(testProject);






//const NEWPROJ = Project();




//enderProject(NEWPROJ);



//content.append(testProj)



