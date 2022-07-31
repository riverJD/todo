import closeTaskIcon from "./img/close-project.svg";
import editTaskIcon from "./img/pencil.svg";
import saveTaskIcon from "./img/save-task.svg";
import finishTaskIcon from "./img/finish-task.svg";
import deleteTaskIcon from "./img/delete-task.svg";
import { editDescription, editGoal, editTitle, createMiniTask, closeProject, renderProject, deleteTask} from "./projectUI";
import { Task } from "./todo";
import { element, makeContainer } from "./utils";
import { format } from "date-fns";


// Show a full task on screen
const renderTask = (task) => {

    
    const oldTaskDOM = document.querySelector(".task");
    if (oldTaskDOM != undefined) oldTaskDOM.remove();
    
    // DOM element to attach self to
    const content = document.querySelector("#content");

    const projectDOM = document.querySelector('.project');
    projectDOM.classList.add('blockproject')

    // The actual render object 
    const taskPopup = () => {
        const newTask = element('div', {class: "task", id: `${task.title}-${task.getID()}`, 'data-id': task.getID()})

        const title = () => {

            const titleBar = element('div', {'class': "task-title-bar"});
            
            const editButton = element('input', {'type': 'image', 'src': editTaskIcon, 'class': 'task-button', 'id': 'task-edit-button', 'value': 'Edit'});
            editButton.addEventListener('click', () => editTask(task));
            titleBar.appendChild(editButton);


            const title = element('h2', {'class': "task-title"});
            title.textContent = task.getTitle();;
            titleBar.appendChild(title);            


            const completeButton = element('input', {'type': 'image', 'src': finishTaskIcon, 'class': 'task-button', 'id': 'task-complete-button', 'value': 'CHK'});
            completeButton.addEventListener('click', () => {
                // set task as complete
            })
            titleBar.appendChild(completeButton)

            return titleBar;
        }

        const description = () => {


        const description = element('div', {'class': "task-desc", 'id': `${task.title}-desc`});
        description.textContent = task.getDescription();
                return description;
        }
      
        // Creating a DOM container to hold priority and deadline display
        const priority = () => {

            const priority = makeContainer('task-deadline');
            const priorityHeader = priority.querySelector('.task-deadline-header');
     
                priorityHeader.textContent = "Deadline"
            const priorityButton = element('input', {'type': 'button', 'class': `priority-button task-item ${priorityStyle(task).priorityValue}`, 'value': priorityStyle(task).priorityText});
            priorityButton.addEventListener('click', () => cyclePriority(task));

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
            const goal = element('div', {'class': "task-goal-header", "id": `${task.title}-goal`});
            const goalHeader = element('h3', {'class': 'goal-title'})
            const goalContent = element('p', {'class': 'task-goal'});
            goalContent.textContent = task.getGoal();
            goalHeader.textContent = "Goal"
            goal.appendChild(goalHeader)
            goal.appendChild(goalContent)
        
            return goal;
        }

        // Creation of button bar
        const buttonBar = () => {

            const buttons = element("div", {'class': 'button-bar', 'id': 'task-buttons'});
            const deleteButton = element('input', {'type': 'image', 'src': deleteTaskIcon, 'alt': 'Delete task', 'class': 'task-button delete-task', 'id': 'delete-task', 'value': 'Delete'})
            deleteButton.addEventListener('click', (e) => {
                deleteTask(task);
                closeTask(e.target.parentNode.parentNode);
            });
            buttons.appendChild(deleteButton);
          
            const closeButton = element('input', {'type': 'image', 'src': closeTaskIcon,'alt': 'Close Task', 'class': 'task-button close-task'});
            closeButton.addEventListener('click', (e) => closeTask(e.target.parentNode.parentNode));
            buttons.appendChild(closeButton);                
        

            return buttons;

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

const cyclePriority = (task) => {

    const curPriority = task.getPriority();

    // Priority is 1-3, cycle to next priority level
    const newPriority = changePriority(task, (((curPriority) % 3) + 1));


}

// Task Object, Priority Integer
const changePriority = (task, priority) => {

    task.setPriority(priority);
    
    closeProject();
    renderProject(task.getParent());
    renderTask(task);

}



const closeTask = (DOM) => {

    const project = document.querySelector('.project');
    project.classList.remove('blockproject');

    if (DOM != null) DOM.remove();
}


const createTask = (container, project) => {

    const task = Task();
    task.setParent(project);
    
   
    const taskList = (container)
    taskList.insertBefore(createMiniTask(project, task), taskList.lastElementChild);
   
    // Add to object
    project.tasks.addTask(task);
    task.getID();

}

// Would like to refactor this to share with edit project functions if possible
const editTask = (task) => {
    
    //const project = task.getParent();
    const tempTask = Task();

    const content = tempTask;

    const buttonBar = document.querySelector('.task-title-bar');
    const title = document.querySelector('.task-title');
    const editButton = document.querySelector('#task-edit-button');
    editButton.classList.add('hidden');
    const saveButton = element('input', {'type': 'image', 'src': saveTaskIcon, 'class': 'task-edit-button task-button', 'id': 'task-edit-button', 'value': 'Save'})

    saveButton.addEventListener('click', () => {

        content.setTitle(newTitle.value);
        content.setDescription(newDescription.value);
        content.setGoal(newGoal.value);
        saveButton.remove();
        editButton.classList.remove('hidden');

        saveToTask();
    })

    const saveToTask = () => {
        console.log(task)
        task.setTitle(content.getTitle());
        task.setDescription(content.getDescription());
        task.setGoal(content.getGoal());
   
        closeTask(buttonBar.parentNode);
        closeProject();
        renderProject(task.getParent());
        renderTask(task);

    }


    buttonBar.insertBefore(saveButton, title);

    const newTitle = editTitle('task');
    const newDescription = editDescription('task');
    const newGoal = editGoal('task');


}

const priorityStyle = (task) => {

    let priorityValue;
    let priorityText;
        
    switch (task.getPriority()){

        case 3:
            priorityValue = 'lowpriority';
            priorityText = 'Low';
            break;
        case 2:
            priorityValue = 'medpriority';
            priorityText = 'Med';
            break;
        case 1:
            priorityValue = 'highpriority';
            priorityText = 'High';
            break;
        default: 
            console.warn(`That priority level is not implemented: ${task.getPriority()}`);
            break;    
    }

    


    return {priorityValue, priorityText}
};
export {editTask, createTask, closeTask, renderTask, priorityStyle}