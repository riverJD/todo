import { element } from "./utils"
import newProjIcon from "./img/note-plus.svg"
import { addProjectButton, renderProject, settingsMenu } from "./projectUI.js";
import { createProjectCard as renderProjectCard} from "./cards";
import { Project } from "./project";
import { format } from "date-fns";
import { storage } from "./settings";


//  Content space that holds projects

// Create workspace

let projectCount = 0;

const createWorkSpace = () => {

    const main = element('div', {'class': 'main-container', 'id': 'workspace-container'});
    
    const workspace = element('div', {'class': 'workspace', 'id': 'workspace'});
    
    const addProjectButton = element('input', {'type': 'image', 'src': newProjIcon, 'alt': "Create new project", 'class': 'content-button', 'id': 'add-new-project'});
        addProjectButton.addEventListener('click', () => {
            
            const newProject = Project();
            workspace.insertBefore(addNewProject(newProject), addProjectButton);            
            


        });
    workspace.appendChild(addProjectButton);
    main.appendChild(workspace);

    return main;
}

const projectContainer = () => {

    const container = element('div', {'id': 'project-container'});


    return container;
}

const addNewProject = (project) => {
  
    

    const card = renderProjectCard(project);
    projectList.addProject(project)
    project.content.setID(projectCount);
    console.log(`debug:project count is ${projectCount}`)
    projectCount++;
    renderProject(project);
    return card;

}


const projectList = ((project) => {

    let list = [];

    const addProject = (project) => {
        list.push(project)
        console.log(getProjects())

    }

    const removeProject = (project) => {

        storage.deleteProject(project);
        list.splice(project, 1);
        renderProjectList();
    }


    const getProjects = () => list;

    return {addProject, getProjects, removeProject}

})();

const renderProjectList = () => {
    
    const workSpace = document.querySelector('#workspace')
    const workSpaceButton = document.querySelector('#add-new-project')

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {

        card.remove()
    })
    console.log(projectList.getProjects())
    for (let project of projectList.getProjects()){
        
        const card = renderProjectCard(project)
        workSpace.insertBefore(card, workSpaceButton)

    }

}

const switchDisplayStyle = () => {

    const style = document.querySelector('.tab-container');
   
    const cards = document.querySelectorAll('.card');
    if (style != null){
        style.classList.remove('tab-container');

    
        cards.forEach(tab => tab.classList.remove('tab'));
    }
    else{
        const display = document.querySelector('.workspace');
        display.classList.add('tab-container');
        cards.forEach(card => card.classList.add('tab'));
    }

}

// refresh screen and display projects contained in list



export {createWorkSpace as content, projectList, renderProjectList, addNewProject, switchDisplayStyle, projectContainer}

// Button for adding new project


// Array of projects and their IDs (key/value pair)