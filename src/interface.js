import { format } from "date-fns";
import { element, makeContainer, setAttributes } from "./utils";
import defaultProject from "./default-project.json"
import defaultTask from "./default-task.json";
import { Task } from "./todo";
import { Project } from "./project";


// Interface for adding tasks and projects.
const content = document.querySelector("#content")


// Render a full project
const renderProject = (projectObject) => {
   
    const parent = document.querySelector("#content");
    console.log(parent);

    let proj = projectObject.content;

    const render = () => {
    
        // Create skeleton
    const projectTitle = proj.getTitle();
    const project = element('div', {'class': "project", "id": `${projectTitle }-id`})
    const content = element('div', {'class': 'project-content', 'id': `${projectTitle}-content`})
   
    // Loading of data into specified containers
    const renderData = () => {
        
        const title = () => {
            const title = element('h2', {'class': "project-title project-item"});
            title.textContent = projectTitle ;
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

            const deadlineContainer = makeContainer("Deadline");
            const deadlineContent = deadlineContainer.querySelector('.deadline-content');     
            const deadline = element('div', {'class': "project-deadline project-item", "id": `${proj.deadline}-deadline`});
            const priorityButton = element('input', {'type': 'button', 'class': "priority-button project-item", 'value': proj.getPriority()});
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
        const tasks = makeContainer("Tasks");
        const addTask = element('input', {'type':'button', 'id': 'add-task-button', 'value': '++'})
       
        const sample = element('div');
        sample.textContent = 'sample'
        tasks.appendChild(addTask)
        
        // Attaches a new task to both the DOM element and Project Objects
        addTask.addEventListener('click', (e, ) => createTask(e.target.parentNode, projectObject));
        tasks.insertBefore(sample, addTask);
       
        return tasks;
    }
    content.appendChild(tasks());
   

    const projectButtons = () => {

        const buttonContainer = element('div', {'class': 'button-bar'});

        // Will replace with image
        const closeProject = element('input', {'type': 'button', 'id': 'close-project', 'value': 'Close'});
        const editProject = element('input', {'type': 'button', 'id': 'edit-project', 'value': 'Edit'})
        editProject.addEventListener('click', () => editProjectBox())
        
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


const editProjectBox = () => {

    console.log('editing');

    const tempProj = Project();

    editTitle();
    editProjectDescription();
    editProjectGoal();

}

// Enable editing of title of project. Fills in input with content already stored for UX
const editTitle = () => {

    const title = document.querySelector(".project-title");

    const editTitleBox = element('textarea',  {'name': 'textarea', 'placeholder': title.innerText, "class": 'edit-proj-box project-title project-item'});
    editTitleBox.textContent = title.innerText;
    title.parentNode.insertBefore(editTitleBox, title);
    title.remove();
    

}

// Enable editing of description/content of project. Fills in input with content already stored for UX
const editProjectDescription = () => {
    
    const desc = document.querySelector('.project-desc');
    
    //const editDescriptionBox = element('input', {'type': 'text', 'placeholder': desc.innerText, 'class': 'project-description project-item edit-box',})
    const editDescriptionBox = element('textarea', {'name':'textarea', 'placeholder': desc.innerText, 'class': 'edit-proj-box project-item project-desc'});
    editDescriptionBox.textContent = desc.innerText;
    desc.parentNode.insertBefore(editDescriptionBox, desc);
    desc.remove();

}

const editProjectGoal = () => {

    const goal = document.querySelector('.project-goal');
    const goalText = goal.innerText;
    console.log(goalText);
    const editGoalBox = element('textarea', {'placeholder': goalText, 'class': 'edit-proj-box project-goal project-item'})
    editGoalBox.textContent = goalText;
    goal.parentNode.insertBefore(editGoalBox, goal);
    goal.remove();

}

// Show a full task on screen
const renderTask = (task) => {

    const oldTaskDOM = document.querySelector(".task");
    if (oldTaskDOM != undefined) oldTaskDOM.remove();
    
    // DOM element to attach self to
    const content = document.querySelector("#content");

    // The actual render object 
    const taskPopup = () => {
        const newTask = element('div', {'class': "task", id: `${task.title}-id`})


        const title = () => {

            const title = element('h2', {'class': "task-title"});
            title.textContent = task.title;
            return title;
        }

        const description = () => {


        const description = element('div', {'class': "task-desc", 'id': `${task.title}-desc`});
        description.textContent = task.description;
                return description;
        }
      
            // Creating a DOM container to hold priority and deadline display
        const priority = () => {

            const priority = makeContainer('task-deadline');
            const priorityHeader = priority.querySelector('.task-deadline-header');
            priorityHeader.textContent = "Deadline"
            const priorityButton = element('input', {'type': 'button', 'class': "priority-button task-item", 'value': task.getPriority()});

            const deadlineContent = priority.querySelector('.task-deadline-content');     
            const deadline = element('div', {'class': "task-deadline task-item", "id": `${task.deadline}-deadline`});
            deadline.textContent = format(task.getDeadline(), "MM.dd.yyyy");
            deadlineContent.appendChild(deadline);


            priority.appendChild(deadlineContent);    
            deadlineContent.appendChild(priorityButton);
            priority.value = task.priority;
        
            return priority;
        }

        // Creation of goal element
        const goal = () => {
            const goal = element('div', {'class': "task-goal", "id": `${task.title}-goal`});
            const goalHeader = element('h3', {'class': 'goal-button'})
            const goalContent = element('p', {'class': 'goal-content'});
            goalContent.textContent = task.getGoal();
            goalHeader.textContent = "Goal"
            goal.appendChild(goalHeader)
            goal.appendChild(goalContent)
        
            return goal;
        }

        const buttonBar = () => {

        
            const deleteButton = element('input', {'type': 'button', 'class': 'task-button delete-task', 'id': 'delete-task'})
            deleteButton.addEventListener('click', (e) => deleteTask(e.target.parentNode, task));
                
                
        

            return deleteButton;

        }


        newTask.appendChild(title());
        newTask.appendChild(description());
        newTask.appendChild(priority());
        newTask.appendChild(goal());
        newTask.appendChild(buttonBar());


        return newTask;
        
    }
    
    content.appendChild(taskPopup());
}

//Handles display of 'Tasks list'
const renderTaskList = (project) => {

    const list = document.querySelector('.tasks-container')
   
    const miniList = document.querySelectorAll('.mini-task');
    miniList.forEach(mini => mini.remove())
    for (let task of project.tasks.getTaskList()){

        const minitask = createMiniTask(project, task);
        list.insertBefore(minitask, list.lastElementChild);

    }
    


}


const createTask = (container, project) => {

    const task = Task();
    task.setParent(project);
    renderTask(task);
    const taskList = (container)
    taskList.insertBefore(createMiniTask(project, task), taskList.lastElementChild);
   
    // Add to object
    project.tasks.addTask(task);

}

// Deletes parent dom, and respective task from project
const deleteTask = (DOM, task) => {

    console.log(DOM);
    console.log(task);

    DOM.remove();
    
    const project = task.getParent();
    project.tasks.deleteTask(task);
    renderTaskList(project);

}

const closeTask = (DOM) => {

    DOM.remove();
}

// Creates a mini-task DOM element out of task object
const createMiniTask = (project, task) => {
    
    const minitask = element('div', {'class':'mini-task'})
   
    //console.log(task);
    // Delete mini
    const removeMini = element('input', {'type': 'button', 'class': 'mini-button mini-delete', 'value': '-'})
    removeMini.addEventListener('click', () => deleteMini(task));
    // Mark mini as complete
    const finishMini = element('input', {'type': 'button', 'class': 'mini-button mini-finish', 'value': 'F'});
    //Open Task in full view
    const miniButton = element('input', {'type': 'button', 'class': 'mini-button', 'value': `${task.getTitle()}`});
        
    
    
    miniButton.addEventListener('click', () => renderTask(task))
    minitask.appendChild(removeMini);
    minitask.appendChild(miniButton);
    minitask.appendChild(finishMini)
    let bgcolor = minitask.style.backgroundColor;
    const title = element('h4', {'class': 'mini-task-title'})
    
    
    switch (task.getPriority()){

        case 1: 
             bgcolor = "red";
            break;
        case 2:
            bgcolor = "yellow";
            break;
        case 3:
            bgcolor = "green";
            break;
            
            

    }

    minitask.appendChild(title);


    return minitask;
}

const deleteMini = (task) => {

    const project = task.getParent();
    project.tasks.deleteTask(task);
    
    const taskCard = document.querySelector('.task');
    closeTask(taskCard);

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
    
    const deadline = document.querySelector('#deadline-button');
    const priority = document.querySelector('.priority-button.project-item');
    priority.addEventListener('click', (e) => {

        const currentPriority = project.content.getPriority();
      //  console.log(currentPriority);

       
        const updatedPriority = ((currentPriority) % 3) + 1;
        project.content.setPriority(updatedPriority);
        e.target.value = updatedPriority;
        

    })   

}




const closeProject = () => {
    console.log('click')
    const project = document.querySelector('.project')
   
    project.remove();

}




const addProjectPopUp = () => {
    
    const button = element("button", {"id": "project-button", "value": "Pressit","textContent": "Press"})
    button.addEventListener("click", () => {
        
    })


    return button;

}


export {renderProject, renderTask, addProjectPopUp as addProjectButton, createListeners}