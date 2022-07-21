import { format } from "date-fns";
import { element, makeContainer, setAttributes } from "./utils";
import defaultProject from "./default-project.json"
import defaultTask from "./default-task.json";


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
        addTask.addEventListener('click', (e) => createTask(e));
        const sample = element('div');
        sample.textContent = 'sample'
        tasks.appendChild(addTask)
        tasks.insertBefore(sample, addTask);
        return tasks;
    }
    content.appendChild(tasks());
   

    const projectButtons = () => {

        const buttonContainer = element('div', {'class': 'button-bar'});

        // Will replace with image
        const closeProject = element('input', {'type': 'button', 'id': 'close-project', 'value': 'Close'});
        const editProject = element('input', {'type': 'button', 'id': 'edit-project', 'value': 'Edit'})
        
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
    createListeners();
    

}

const renderTask = (task) => {

    const content = document.querySelector("#content");

    const taskPopup = () => {
    const newTask = element('div', {'class': "task", id: `${task.title}-id`})

    const title = element('h2', {'class': "task-title"});
    title.textContent = task.title;

    const description = element('div', {'class': "task-desc", 'id': `${task.title}-desc`});
    description.textContent = task.description;

    const priority = () => {

    const priority = makeContainer('task-deadline');
    const priorityHeader = priority.querySelector('.task-deadline-header');
    priorityHeader.textContent = "Deadline"
    const deadlineContent = priority.querySelector('.task-deadline-content');     
    const deadline = element('div', {'class': "task-deadline task-item", "id": `${task.deadline}-deadline`});
    const priorityButton = element('input', {'type': 'button', 'class': "priority-button task-item", 'value': task.getPriority()});
    deadline.textContent = format(task.getDeadline(), "MM.dd.yyyy");
    deadlineContent.appendChild(deadline);
    priority.appendChild(deadlineContent);    
    deadlineContent.appendChild(priorityButton);

    
    priority.value = task.priority;
    
        return priority;
    }

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

    newTask.appendChild(title);
   newTask.appendChild(description);
    newTask.appendChild(priority());
    newTask.appendChild(goal());


    return newTask;
    
    }
    
    content.appendChild(taskPopup());
}

const getProjectFromUser = () => {


}


// Buttons and Listeners
const createListeners = () => {

    // Create listeners for buttons
    const edit = document.querySelector('#edit-project');
    console.log(edit)
    const close = document.querySelector('#close-project');
 
    // Content button (expand content)
    const tasks = document.querySelector('#tasks-button');
    
    const deadline = document.querySelector('#deadline-button');
    const priority = document.querySelector('.priority-button');

    close.addEventListener('click', () => closeProject());
   

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