import { format } from "date-fns";
import { element, setAttributes } from "./utils";

// Interface for adding tasks and projects.


const renderProject = (proj) => {

    const project = element('div', {'class': "project", id: `${proj.title}-id`})
    
    // attributes
    const title = element('h2', {'class': "project-title"});
    title.textContent = proj.title;
   
    const description = element('div', {'class': "project-desc", 'id': `${proj.title}-desc`});
    description.textContent = proj.description;
    
    const priority = element('div', {'class': "project-priority", "id": `${proj.title}-priority`});
    priority.textContent = proj.priority;
    
    const goal = element('div', {'class': "project-goal", "id": `${proj.title}-goal`});
    goal.textContent = proj.goal;
    
    const deadline = element('div', {'class': "project-deadline", "id": `${proj.deadline}-deadline`});
    deadline.textContent = proj.deadline;

    project.appendChild(title);
    project.appendChild(description);
    project.appendChild(priority);
    project.appendChild(goal);
    project.appendChild(deadline);

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

export {renderProject, renderTask}