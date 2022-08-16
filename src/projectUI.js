import { format, } from "date-fns";
import { appendChildren, element, makeContainer, makeMenu, setAttributes, getDate as getToday} from "./utils";
import defaultProject from "./default-project.json"
import defaultTask from "./default-task.json";
import { getUrgency, Task } from "./todo";
import { Project } from "./project";
import { projectList, renderProjectList } from "./content";
import { renderTask, priorityStyle, toggleTaskStatus, editTask} from "./taskUI";
import { storage, UI } from "./settings";



// images

import closeProjectIcon from "./img/arrow-bottom-left-thick.svg";
import editProjectIcon from "./img/edit.svg";
import saveProjectIcon from "./img/save-content.svg";
import miniSortIcon from "./img/sort.svg";
import miniCheckbox from './img/minicheckbox.svg';
import miniCheckboxComplete from './img/minicheckmarked.svg';
import miniDeleteIcon from './img/delete-alert.svg';
import finishTasksIcon from './img/finish-task.svg';
import calendarIcon from './img/calendar-edit.svg';
import addMiniTaskIcon from './img/plus-box-multiple.svg';
import saveDeadlineIcon from './img/save-task.svg';
import lowUrgencyIcon from './img/snowflake.svg';
import medUrgencyIcon from './img/progress-clock.svg';
import highUrgencyIcon from './img//fire-alert.svg';


// Interface for adding tasks and projects.
const content = document.querySelector("#content")
const TASKLISTMAX = 7;
const today = getToday();


// Render a full project
const renderProject = (projectObject) => {
   
    // Container to attach project to
    const parent = document.querySelector("#workspace");

    // Remove interaction with rest of workspace;
    const container = document.querySelector("#project-container");
    container.style.display = 'flex';
    //const cards = document.querySelectorAll('.card');
    //cards.forEach(card => card.classList.add('blockscreen'))

    // Store project data locally
    storage.storeProj(projectObject);


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
        const deadline1 = () => {

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

        const deadline = () => {

           
           // const priority = makeContainer('task-deadline', editDeadlineIcon);
           const priority = element('div', {'class': `project-deadline-container`});
           
           const priorityHeader = element ('h3', {'class': `project-deadline-header`});  
           priorityHeader.textContent = "Priority: "   
           
           const editDeadlineButton = element('input', {'type': 'image', 'src': calendarIcon,  'id': `project-deadline-button`, 'class': 'container-button project-button expand-content-btn', }, );
           editDeadlineButton.addEventListener('click', () => {
           
           openDeadlineForm(projectObject);
        
        });
            const switchPriorityButton = element('input', {'type': 'button', 'class': `priority-button task-item ${priorityStyle(proj).priorityValue}`, 'value': priorityStyle(proj).priorityText});
            switchPriorityButton.addEventListener('click', () => cyclePriority(projectObject));

            const deadline = element('h4', {'class': "project-deadline", "id": `proj-deadline`});
            deadline.textContent = format(proj.getDeadline(), "MM.dd.yyyy");
            
            appendChildren(priority, priorityHeader, editDeadlineButton, switchPriorityButton, deadline);

            priority.value = proj.getPriority();
        
            return priority;
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

        // tooltips and menu
        const sortMenu = () => {
           // const menu = makeMenu('sort', 'sort tasks');
            
          //  const header = element('h5', {'class': 'menu-item menu-header', 'id': 'sort-test'})
          //  header.textContent = 'sort';
          //  menu.appendChild(header);
          
            const sort = element('div', {'id': 'sort'})
            const sortHeader = element('h5', {'class': 'task-sort-header task-sort-type'});
            sortHeader.textContent = UI.getSort();
            sort.appendChild(sortHeader)
        
            const sortButton = element('input', {'type': 'image', 'src': miniSortIcon, 'class': 'container-button', 'id':'mini-sort', 'alt': 'Sort tasks', 'data-sort': ''});
          
            sort.appendChild(sortButton);
            
            //sort.appendChild(menu);
          

            sortButton.addEventListener('click', (e) => {
                
                settingsMenu(sortButton.parentElement, projectObject)
            
            })
           
            return sort;
        }

        // Tasks / Titlebar
        //const tasks = makeContainer("Tasks", finishTasksIcon);
        const tasksContainer = element('div', {'class': 'tasks-container'});
        const titleContainer = element('div', {'class': "title-container", 'id': `tasks-title-container`});
        
       
       
        
        const title = element('h4', {'class': `tasks-header`});
            title.textContent = 'Tasks';

        const finishTasksButton = element('input', {'type': 'image', 'src': finishTasksIcon,  'id': `tasks-button`, 'class': 'container-button expand-content-btn', }, );
 
        
        appendChildren(titleContainer, title, finishTasksButton);

        const content = element('div', {'class': "tasks-content"});

        appendChildren(tasksContainer, titleContainer, content);
        

        const addTask = element('input', {'type':'image', 'src': addMiniTaskIcon, 'id': 'add-task-button', 'alt': 'add mini task'})

        titleContainer.insertBefore(sortMenu(), titleContainer.firstElementChild); 
        //const miniTitleContainer = document.querySelector("#tasks-title-container");
        // miniTitleContainer.appendChild(sort);
   

        tasksContainer.appendChild(addTask)

        // Attaches a new task to both the DOM element and Project Objects

        addTask.addEventListener('click', (e, ) => {
            
            //createTask(e.target.parentNode, projectObject);
            createTask(projectObject);
            
            renderTaskList(projectObject);
  
        })

        

        return tasksContainer;
    }


    content.appendChild(tasks());
   

    const projectButtons = () => {

        const buttonContainer = element('div', {'class': 'button-bar', 'id': 'project-button-bar'});

        const closeProjectButton = element('input', {'type': 'image', 'src': closeProjectIcon,'class': 'project-button', 'id': 'close-project', 'value': 'Close'});
        const editProject = element('input', {'type': 'image', 'src': editProjectIcon, 'class': 'project-button', 'id': 'edit-project', 'value': 'Edit'})
        editProject.addEventListener('click', () => {
            
        


        editProjectBox(projectObject);
            
            
            
        })
        
        buttonContainer.appendChild(closeProjectButton)
        buttonContainer.appendChild(editProject)

        return buttonContainer;
    }
    
    content.appendChild(projectButtons());

    project.appendChild(content)

   

    
    return project;
  
    }

    const project = render();

    
    parent.appendChild(project);
    createListeners(projectObject);
    renderTaskList(projectObject);
  
    

}

const createTask = (project) => {

    const task = Task();
    task.setParent(project);
    renderTask(task);
    editTask(task);

    project.tasks.addTask(task);
    const exampleJSON = JSON.stringify(task);

    const newObj = JSON.parse(exampleJSON);

 
}

// Proj is original project being edited;
const editProjectBox = (proj) => {

    // Alter UI elements
    disableProjUI();

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
    const newGoal = editGoal('project');
       




}

// Disable unrelated buttons while in edit mode
const disableProjUI = () => {
    const deadlineContainer = document.querySelector(".project-deadline-container");
    deadlineContainer.classList.add('disabled');
    const tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.classList.add('disabled');

}

// Enable editing of title of project or task. Returns DOM Object. Target is string either 'project' or 'task'
const editTitle = (target) => {

    const title = document.querySelector(`.${target}-title`);
   
    const editTitleBox = element('textarea',  {'name': 'textarea', 'placeholder': title.innerText, "class": `edit-${target}-box ${target}-title ${target}-item`, 'maxlength': 14});
    editTitleBox.textContent = title.innerText;
    title.parentNode.insertBefore(editTitleBox, title);

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

    const editGoalBox = element('textarea', {'placeholder': goalText, 'class': `edit-${target}-box ${target}-goal ${target}-item`})
    editGoalBox.textContent = goalText;
    goal.parentNode.insertBefore(editGoalBox, goal);
    goal.remove();
    return editGoalBox;

}


// For sorting the list of tasks in a project.  method is an optional override
const sortList = (list, method) => {

    if (method == null){
        method = UI.getSort();
    }

    switch(method){

        case 'priority':
            return list.sort((a,b) => { 
                return a.getPriority() - b.getPriority() });
            
        case 'deadline':
            return list.sort((a,b) => { 
                return a.getDeadline() - b.getDeadline() });
  
        case 'urgency':
            return list.sort((a,b) => { 
                return a.getUrgency() - b.getUrgency() });
           
        case 'title':
            return list.sort((a, b) => a.getTitle().localeCompare(b.getTitle()));
    }


    return;


}

//Handles display of 'Tasks list'
const renderTaskList = (project) => {

    // Threshold for styling with urgency.  Lower is more urgent. 
    const LOWURGENCYLEVEL = 400;
    const HIGHURGENCYLEVEL = 100;

    const parent = document.querySelector('.tasks-container')
    const list = element('div', {'class': 'task-list'});
    parent.insertBefore(list, parent.lastElementChild)
    const miniList = document.querySelectorAll('.mini-task');
    miniList.forEach(mini => mini.remove())

    // Sort list based on user option
    let taskList = project.tasks.getTaskList();
   /* console.log(taskList)
    taskList.sort((a, b) => {
        const sort = sortTasks();
        return a.sort - b.sort
    });*/

    sortList(taskList);


    for (let task of taskList){
        //console.log(task);
        const minitask = createMiniTask(project, task);


        if (task.getStatus() === true){
            minitask.classList.add('completed');        
        }
        else minitask.classList.remove('completed');

      
      
       list.appendChild(minitask);
    }


    
}



// Deletes task from parent project
const deleteTask = (task) => {


    const project = task.getParent();
    storage.deleteTask(task);
    project.tasks.removeTask(task);
    renderTaskList(project);
}

// Delete the DOM element associated with task



// Creates a mini-task DOM element out of task object
const createMiniTask = (project, task) => {
    
    const minitask = element('div', {'class':'mini-task'})
    minitask.classList.add(priorityStyle(task).priorityValue);
    if (task.getStatus() === true){
        minitask.classList.add('completed');
       
    }

    //console.log(task);
    // Delete mini
    const removeMini = element('input', {'type': 'image', 'src': miniDeleteIcon, 'class': 'mini-button mini-delete', 'alt': 'Delete task'})
    // Pass on DOM of Minilist and Task to delete
    removeMini.addEventListener('click', (e) => deleteMini(task));
    // Mark mini as complete
    const finishMini = element('input', {'type': 'image', 'src': miniCheckbox, 'class': 'mini-button mini-finish', 'alt': "Finish task"});
    finishMini.addEventListener('click', (e) => toggleTaskStatus(task));
    //Open Task in full view
    //const miniButton = element('input', {'type': 'button', 'class': 'mini-button mini-title', 'value': `${task.getTitle()}`});
    const miniBar = element('div', {'class': 'mini-button mini-title-bar'});
    const miniTitle = element('h4', {"class": 'mini-task-item mini-task-title'});
    miniTitle.textContent = task.getTitle();
    const dueDate = element('h4', {"class": "mini-task-item mini-task-date"});
    dueDate.textContent = format(task.getDeadline(), "MM.dd.yy");

    // Style urgency icon based on urgency status
    const setUrgencyStatus = () => {

        const LOWURGENCYLEVEL = 400;
        const HIGHURGENCYLEVEL = 30;
        
        let icon = medUrgencyIcon;
        const urgency = task.getUrgency();
   

        if (urgency >= LOWURGENCYLEVEL) icon = lowUrgencyIcon;
        else if (urgency <= HIGHURGENCYLEVEL) icon = highUrgencyIcon;
        
        return icon

    }
    const urgencyStatus = element("img", {"src": setUrgencyStatus(), 'class': 'urgency-icon mini-task-item mini-task-urgency', 'alt': 'Task urgency indicator'})

       
    appendChildren(miniBar, miniTitle, dueDate);
    if (!task.getStatus()) miniBar.appendChild(urgencyStatus)


    miniBar.addEventListener('click', () => renderTask(task))
    minitask.appendChild(removeMini);
    minitask.appendChild(miniBar);
    minitask.appendChild(finishMini)
    let bgcolor = minitask.style.backgroundColor;
    const title = element('h4', {'class': 'mini-task-title'})
    
    
    minitask.appendChild(title);


    return minitask;
}

const sortMenu = () => {

    


}


const deleteMini = (task) => {

    
    const project = task.getParent();


   
    
    const taskCard = document.querySelector('.task');
    if (taskCard != null){
        if (taskCard.getAttribute('data-id') == task.getID()) closeTask(taskCard);
    }

    // Refresh task list

    deleteTask(task);
   

}

const openDeadlineForm = (project) => {

    // Alter project UI
    disableProjUI();
    
    const container = element('div', {'class': 'form-container', 'id': 'deadline-form-container'});
  
    container.appendChild(deadlineForm(project));
    const parent = document.querySelector('body');
    parent.appendChild(container);
  

}

const deadlineForm = (project) => {

    const FORM_HEADER = "Select Deadline"
    
    const formContainer = element('div', {"id": "project-form-container"});
    const form = element('form', {'class': 'project-deadline-form', "id": "deadline-form"});

    const dateLabel = element('label', {"for": "date", "class": "form-label", "id": "date-label"});
    dateLabel.textContent = "Date";

    const date = element("input", {"type": "date", "class": "form-input", "name": "date", "id": "form_date", "min": today, 'value': format(project.content.getDeadline(), "yyyy-MM-dd"), "required": ""});
    dateLabel.appendChild(date);


    const buttonBar = element('div', {'class': 'button-bar form-buttons', 'id': 'form-buttons'})
        const submitDeadline = element('input', {'type': 'image', 'src': saveDeadlineIcon, 'alt': 'confirm deadline', 'class': 'form-button task-button', 'id': 'submit-deadline-button'})
  
        const close = element('input', {'type': 'image', 'src': closeProjectIcon, 'alt': 'close without changes', 'class': 'form-button task-button', 'id': 'close-deadline-button'})
            close.addEventListener('click', (e) => {
                const form = document.querySelector("#deadline-form-container")
                e.preventDefault();
                formContainer.remove();
                closeProject();
                renderProject(project);
            })
    appendChildren(buttonBar, submitDeadline, close)
    

    form.appendChild(buttonBar);
   
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        updateDeadline(project, form)
        closeProject();
        renderProject(project);
        formContainer.remove();
    });
    const formHeader = element("h2", {'class':'form-header deadline-form'});
    formHeader.textContent = FORM_HEADER;

   
appendChildren(form, dateLabel, formHeader);
formContainer.appendChild(form);
return formContainer;

};

const updateDeadline = (project, form) => {

    const DEFAULTTIME = "12:00:01"

    const deadlineData = new FormData(form);

    let newDay = deadlineData.get('date');

    const newTime = DEFAULTTIME;
    const newDeadline = new Date(newDay + 'T' + newTime)

    project.content.setDeadline(newDeadline);


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
  

}

const cyclePriority = (project) => {

    const currentPriority = project.content.getPriority();
    //  console.log(currentPriority);

     
      const updatedPriority = (((currentPriority) +1 ) % 3) + 1;
      project.content.setPriority(updatedPriority);
      closeProject(project);
      renderProject(project);


      
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
    const projectContainer = document.querySelector('#project-container');
    projectContainer.style.display = 'none';
    
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

const settingsMenu = (parent, project) => {

    

     const oldContainer = document.querySelector('.menu-container');
    if (oldContainer != null) oldContainer.remove();

    const container = element('div', {'class': 'menu-container'});
    container.addEventListener('click', () => container.remove())
    container.style.visibility = 'visible';
    const menu = element('div', {'class': 'context-menu', 'id': 'sort-menu'});
    const menuItems = element('ul', {'class': 'menu-items menu-list', 'id': 'sort-menu-items'});
 
    const sortOption = (sortType) => {
        
        const sort = element('li', {'class': 'menu-edit menu-item'});
        sort.textContent = sortType;
            sort.addEventListener('click', () => {

                UI.setSort(sortType);
                renderTaskList(project);
                const sortHeader = document.querySelector(".task-sort-header");
                sortHeader.textContent = UI.getSort();
                close();
            })
        return sort
    }

    appendChildren(menuItems, sortOption('deadline'), sortOption('priority'), sortOption('urgency'), sortOption('title'));


    menu.appendChild(menuItems);
    container.appendChild(menu);
    parent.appendChild(container);



    const close = () => {

        container.remove();

    }


}





const addProjectPopUp = () => {
    
    const button = element("button", {"id": "project-button", "value": "Pressit","textContent": "Press"})
    button.addEventListener("click", () => {
        
    })


    return button;

}


export {renderTaskList, toggleTaskStatus, settingsMenu, deleteProject, cyclePriority, editProjectBox, deleteTask, finishProject, closeProject, renderProject, renderTask, addProjectPopUp as addProjectButton, createListeners, editTitle, editDescription, editGoal, createMiniTask}