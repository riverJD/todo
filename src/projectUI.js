import { format } from "date-fns";
import { element, makeContainer, setAttributes } from "./utils";
import defaultProject from "./default-project.json"
import defaultTask from "./default-task.json";
import { Task } from "./todo";
import { Project } from "./project";
import { projectList, renderProjectList } from "./content";
import { renderTask, createTask, priorityStyle} from "./taskUI";

// images

import closeProjectIcon from "./img/close-project.svg";
import editProjectIcon from "./img/edit.svg";
import saveProjectIcon from "./img/save-content.svg";

import miniCheckbox from './img/minicheckbox.svg';
import miniCheckboxComplete from './img/minicheckmarked.svg';
import miniDeleteIcon from './img/delete-alert.svg';
import finishTasksIcon from './img/finish-task.svg';
import calendarIcon from './img/calendar-edit.svg';



// Interface for adding tasks and projects.
const content = document.querySelector("#content")
const TASKLISTMAX = 7;

// Render a full project
const renderProject = (projectObject) => {
   
    // Container to attach project to
    const parent = document.querySelector("#workspace");

    // Remove interaction with workspace
    const main = document.querySelector("#workspace-container");
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.add('blockscreen'))


    let proj = projectObject.content;

    const render = () => {
    
    // Create dom skeleton 
    const projectTitle = proj.getTitle();
    const project = element('div', {'class': "project", "id": `${projectTitle }-id`})
    const content = element('div', {'class': 'project-content', 'id': `${projectTitle}-content`})
   
    // Loading of data into specified containers
    const renderData = () => {
        
        // create titgle bar
        const title = () => {


            const title = element('h2', {'class': "project-title project-item"});
            title.textContent = projectTitle;
           

           
            return title;
        }
        content.appendChild(title());
        
        const description = () => {
            const description = element('div', {'class': "project-desc project-item", 'id': `${projectTitle }-desc`});
            description.textContent = proj.getDescription();
            return description;
        }
        content.appendChild(description())

        // Deadline/Priority/Urgency Container (These will interact a lot)
        const deadline = () => {

            const deadlineContainer = makeContainer("Deadline", calendarIcon);
            const deadlineContent = deadlineContainer.querySelector('.deadline-content');     
            const deadline = element('div', {'class': "project-deadline project-item", "id": `${proj.deadline}-deadline`});
            const priorityButton = element('input', {'type': 'button', 'class': `priority-button project-item ${priorityStyle(proj).priorityValue}`, 'value': priorityStyle(proj).priorityText});
            deadline.textContent = format(proj.getDeadline(), "MM.dd.yyyy");
            deadlineContent.appendChild(deadline);
            deadlineContainer.appendChild(deadlineContent);    
            deadlineContent.appendChild(priorityButton);
        
            return deadlineContainer;
        }
        content.appendChild(deadline())

        // Also known as objective
        const goal = () => {
            const goal = element('div', {'class': "project-goal project-item", "id": `${projectTitle }-goal`});
            goal.textContent = proj.getGoal();
            return goal;
        }
        content.appendChild(goal()); 
    }
    renderData();

    // Task Container
    const tasks = () => {
        const tasks = makeContainer("Tasks", finishTasksIcon);
        const addTask = element('input', {'type':'button', 'id': 'add-task-button', 'value': '++'})
       console.log(projectObject.tasks.getTaskList().length)
   
        tasks.appendChild(addTask)
        
        // Attaches a new task to both the DOM element and Project Objects

        addTask.addEventListener('click', (e, ) => {
            
            createTask(e.target.parentNode, projectObject);
            
  
        })

        

        return tasks;
    }


    content.appendChild(tasks());
   

    const projectButtons = () => {

        const buttonContainer = element('div', {'class': 'button-bar', 'id': 'project-button-bar'});

        const closeProject = element('input', {'type': 'image', 'src': closeProjectIcon,'class': 'project-button', 'id': 'close-project', 'value': 'Close'});
        const editProject = element('input', {'type': 'image', 'src': editProjectIcon, 'class': 'project-button', 'id': 'edit-project', 'value': 'Edit'})
        editProject.addEventListener('click', () => {
            

        editProjectBox(projectObject);
            
            
            
        })
        
        buttonContainer.appendChild(closeProject)
        buttonContainer.appendChild(editProject)

        return buttonContainer;
    }
    
    project.appendChild(projectButtons());

    project.appendChild(content)

   

    
    return project;
  
    }

    const project = render();

    
    parent.appendChild(project);
    createListeners(projectObject);
    renderTaskList(projectObject);
  
    

}

// Proj is original project being edited;
const editProjectBox = (proj) => {

    // Create temporary project to save to, allow for future refactoring
    const tempProj = Project();
    
    const content = tempProj.content;

    // Create save button and hide edit button
    const buttonBar = document.querySelector('.button-bar');
    const editButton = document.querySelector('#edit-project');
    editButton.classList.add('hidden');
    const saveButton = element('input', {'type': 'image', 'src': saveProjectIcon, 'class': 'project-button edit-button', 'id': 'save-project-button', 'value': 'Save'});
    
    // Copy content to temporary project object
    saveButton.addEventListener('click', () => {

        content.setTitle(newTitle.value);
        content.setDescription(newDescription.value);
        content.setGoal(newGoal.value);
        saveButton.remove();
        editButton.classList.remove('hidden');

        saveToProject();  

    })

    // Save temporary project content to original project and refresh
    // The extra step of creating a temporary project is for future editability/refactoring
    const saveToProject = () => {

        proj.content.setTitle(content.getTitle());
        proj.content.setDescription(content.getDescription());
        proj.content.setGoal(content.getGoal());
        
        closeProject(proj);
        renderProject(proj);
    }


    buttonBar.appendChild(saveButton);


    // Functions return DOM object, not its content explicitely
    const newTitle = editTitle('project');
    const newDescription = editDescription('project');
    const  newGoal = editGoal('project');
       
}

// Enable editing of title of project. Returns DOM Object. Target is string either 'project' or 'task'
const editTitle = (target) => {

    const title = document.querySelector(`.${target}-title`);
   
    const editTitleBox = element('textarea',  {'name': 'textarea', 'placeholder': title.innerText, "class": `edit-${target}-box ${target}-title ${target}-item`});
    editTitleBox.textContent = title.innerText;
    title.parentNode.insertBefore(editTitleBox, title);
    console.log(editTitleBox.textContent)
    title.remove();
    return editTitleBox;

}

// Enable editing of description/content of project. Returns DOM object.
const editDescription = (target) => {
    
    const desc = document.querySelector(`.${target}-desc`);
    
    
    const editDescriptionBox = element('textarea', {'name':'textarea', 'placeholder': desc.innerText, 'class': `edit-${target}-box ${target}-item ${target}-desc`});
    editDescriptionBox.textContent = desc.innerText;
    desc.parentNode.insertBefore(editDescriptionBox, desc);
    desc.remove();
    return editDescriptionBox;

}

// Enable editing of goal content.  Returns DOM object.
const editGoal = (target) => {

    const goal = document.querySelector(`.${target}-goal`);
    const goalText = goal.innerText;
    console.log(goalText);
    const editGoalBox = element('textarea', {'placeholder': goalText, 'class': `edit-${target}-box ${target}-goal ${target}-item`})
    editGoalBox.textContent = goalText;
    goal.parentNode.insertBefore(editGoalBox, goal);
    goal.remove();
    return editGoalBox;

}

//Handles display of 'Tasks list'
const renderTaskList = (project) => {

    const list = document.querySelector('.tasks-container')
   
    const miniList = document.querySelectorAll('.mini-task');
    miniList.forEach(mini => mini.remove())
    for (let task of project.tasks.getTaskList()){
        console.log(task);
        const minitask = createMiniTask(project, task);


        if (task.getStatus() === true){
            minitask.classList.add('completed');        
        }
        else minitask.classList.remove('completed');

      

        list.insertBefore(minitask, list.lastElementChild);

    }
    
}

// Deletes task from parent project
const deleteTask = (task) => {

    console.log(task);

    const project = task.getParent();
    project.tasks.removeTask(task);
    renderTaskList(project);
}

// Delete the DOM element associated with task


const toggleTaskStatus = (task) => {

    if (task == null) return;

    if (task.getStatus() === false){
        task.setStatus(true);
        task.getParent().tasks.completeTask(task);
    }
    else{
        task.setStatus(false)
        task.getParent().tasks.removeComplete(task);
    }
  

    renderTaskList(task.getParent());

}

// Creates a mini-task DOM element out of task object
const createMiniTask = (project, task) => {
    
    const minitask = element('div', {'class':'mini-task'})
    minitask.classList.add(priorityStyle(task).priorityValue);
    if (task.getStatus() === true){
        minitask.classList.add('completed');
       
    }

    //console.log(task);
    // Delete mini
    const removeMini = element('input', {'type': 'image', 'src': miniDeleteIcon, 'class': 'mini-button mini-delete', 'value': '-'})
    // Pass on DOM of Minilist and Task to delete
    removeMini.addEventListener('click', (e) => deleteMini(task));
    // Mark mini as complete
    const finishMini = element('input', {'type': 'image', 'src': miniCheckbox, 'class': 'mini-button mini-finish', 'value': 'F'});
    finishMini.addEventListener('click', (e) => toggleTaskStatus(task));
    //Open Task in full view
    const miniButton = element('input', {'type': 'button', 'class': 'mini-button mini-title', 'value': `${task.getTitle()}`});
        
    
    

    miniButton.addEventListener('click', () => renderTask(task))
    minitask.appendChild(removeMini);
    minitask.appendChild(miniButton);
    minitask.appendChild(finishMini)
    let bgcolor = minitask.style.backgroundColor;
    const title = element('h4', {'class': 'mini-task-title'})
    
    
    minitask.appendChild(title);


    return minitask;
}

const deleteMini = (task) => {

    
    const project = task.getParent();

    console.log(project.tasks.getTaskList());
    project.tasks.removeTask(task);
    
    const taskCard = document.querySelector('.task');
    if (taskCard != null){
        if (taskCard.getAttribute('data-id') == task.getID()) closeTask(taskCard);
    }

    // Refresh task list
    renderTaskList(project);


}




const getProjectFromUser = () => {


}


// Buttons and Listeners
const createListeners = (project) => {

    // Create listeners for buttons
    const edit = document.querySelector('#edit-project');
    //console.log(project.content.getPriority())
    const close = document.querySelector('#close-project');
    close.addEventListener('click', () => closeProject());
    // Content button (expand content)
    const tasks = document.querySelector('#tasks-button');
    tasks.addEventListener('click', () => {

        setAllTasks(project);

    })
    
    const deadline = document.querySelector('#deadline-button');
    const priority = document.querySelector('.priority-button.project-item');
    priority.addEventListener('click', (e) => {

        cyclePriority(project);

    })   

}

const cyclePriority = (project) => {

    const currentPriority = project.content.getPriority();
    //  console.log(currentPriority);

     
      const updatedPriority = (((currentPriority) +1 ) % 3) + 1;
      project.content.setPriority(updatedPriority);
      closeProject();

    const projectDOM = document.querySelector('.project');
    if (projectDOM != null) renderProject(project);
      
}



// Toggle completed status for all tasks in a project
const setAllTasks = (project) => {

    let status = false;

    const taskList = project.tasks.getTaskList();
    const finishedList = project.tasks.getCompletedTasks();

    if (project.tasks.getTaskList().length != project.tasks.getCompletedTasks().length){
        status = true;
    }
    else if(finishedList.length === 0){
        status = true;
    }

    project.tasks.clearFinishedList();
    
    for (let task of taskList){

        task.setStatus(status);
        console.log(taskList.length);
        console.log(finishedList.length);
        if (status === true){
            project.tasks.completeTask(task);
            
        }
        else{
            
        }

    }

    const projectDom = document.querySelector('.project');
    if (projectDom != null){    
        closeProject(project);
        renderProject(project);
    }


}


const closeProject = () => {

    const project = document.querySelector('.project')
    
    //Reenable interaction 
    const main = document.querySelector('#workspace-container');
    main.classList.remove('blockscreen')
    
    if (project != null) project.remove();

    renderProjectList();



}

const finishProject = (project) => {

    const projectTasks = project.tasks.getTaskList();

    
    setAllTasks(project);

    renderProjectList();

}

const deleteProject = (project) => {

    projectList.removeProject();


}






const addProjectPopUp = () => {
    
    const button = element("button", {"id": "project-button", "value": "Pressit","textContent": "Press"})
    button.addEventListener("click", () => {
        
    })


    return button;

}


export {deleteProject, cyclePriority, editProjectBox, deleteTask, finishProject, closeProject, renderProject, renderTask, addProjectPopUp as addProjectButton, createListeners, editTitle, editDescription, editGoal, createMiniTask}