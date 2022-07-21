import { format } from "date-fns";
import { element, makeContainer, setAttributes } from "./utils";
import defaultProject from "./default-project.json"
import defaultTask from "./default-task.json";


// Interface for adding tasks and projects.
const content = document.querySelector("#content")


// Render a full project
const renderProject = (projectObject) => {
   
    let proj = projectObject.content;

    // Create skeleton
    const projectTitle = proj.getTitle();

    const project = element('div', {'class': "project", "id": `${projectTitle }-id`})

    const content = element('div', {'class': 'project-content', 'id': `${projectTitle}-content`})
    project.appendChild(content)
    
    const renderData = () => {
 
    
    // Project elements
    const title = element('h2', {'class': "project-title project-item"});
    title.textContent = projectTitle ;
    content.appendChild(title);
    
    // Task Container
    const tasks = makeContainer("Tasks");
    content.appendChild(tasks);

    // Description Box
    const description = element('div', {'class': "project-desc project-item", 'id': `${projectTitle }-desc`});
    description.textContent = proj.getDescription();
    content.appendChild(description)

    // Deadline/Priority/Urgency Container
    const deadlineContainer = makeContainer("Deadline");
    const deadlineContent = deadlineContainer.querySelector('.deadline-content');
    
    

    const priorityButton = element('button', {'class': "priority-button project-item"});

    //const priority = element('div', {'class': "project-priority project-item", "id": `${projectTitle }-priority`});
    priorityButton.textContent = proj.getPriority();
    
    deadlineContent.appendChild(priorityButton);
   

    const goal = element('div', {'class': "project-goal project-item", "id": `${projectTitle }-goal`});
    goal.textContent = proj.getGoal();
    project.appendChild(goal);    
    const deadline = element('div', {'class': "project-deadline project-item", "id": `${proj.deadline}-deadline`});
    deadline.textContent = format(proj.getDeadline(), "MM.dd.yyyy");
    deadlineContent.appendChild(deadline);
    deadlineContainer.appendChild(deadlineContent)
    content.appendChild(deadlineContainer)
    
    }


    renderData();



    console.log(project)
    return project;

}

const renderTask = (task) => {

    const newTask = element('div', {'class': "task", id: `${task.title}-id`})

    const title = element('h2', {'class': "task-title"});
    title.textContent = task.title;

    const description = element('div', {'class': "task-desc", 'id': `${task.title}-desc`});
    description.textContent = task.description;
    const priority = element('div', {'class': "project-priority", "id": `${task.title}-priority`});
    priority.textContent = task.priority;
    
    const goal = element('div', {'class': "project-goal", "id": `${task.title}-goal`});
    goal.textContent = task.goal;
    
    const deadline = element('div', {'class': "project-deadline", "id": `${task.deadline}-deadline`});
    deadline.textContent = task.deadline;

    newTask.appendChild(title);
   newTask.appendChild(description);
    newTask.appendChild(priority);
    newTask.appendChild(goal);
    newTask.appendChild(deadline);



    return newTask;

}

const getProjectFromUser = () => {


}




const addProjectPopUp = () => {
    
    const button = element("button", {"id": "project-button", "value": "Pressit","textContent": "Press"})
    button.addEventListener("click", () => {

       
        
    })


    return button;

}


export {renderProject, renderTask, addProjectPopUp as addProjectButton}