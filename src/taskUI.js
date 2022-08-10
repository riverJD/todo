import closeTaskIcon from "./img/arrow-bottom-left-thick.svg";
import editTaskIcon from "./img/pencil.svg";
import saveTaskIcon from "./img/save-task.svg";
import finishTaskIcon from "./img/finish-task.svg";
import deleteTaskIcon from "./img/delete-task.svg";
import editDeadlineIcon from "./img/calendar-edit.svg"
import confirmIcon from "./img/check-bold.svg";

import { editDescription, editGoal, editTitle, createMiniTask, closeProject, renderProject, deleteTask, renderTaskList} from "./projectUI";
import { Task } from "./todo";
import { appendChildren, element, makeContainer, makeRadio, getDate as getToday} from "./utils";
import { addDays, addMonths, addWeeks, format, parseISO, toDate } from "date-fns";
import {clone } from 'just-clone';
import { cloneDeep } from "lodash";

const today = getToday();
let focusedTask;
// Show a full task on screen
const renderTask = (task) => {

    focusedTask = task;

    // Values
   
    const oldTaskDOM = document.querySelector(".task");
    if (oldTaskDOM != undefined) oldTaskDOM.remove();
    
    // DOM element to attach self to
    const content = document.querySelector("#workspace");

    const projectDOM = document.querySelector('.project');
    projectDOM.classList.add('blockproject')

    // The actual render object 
    const taskPopup = () => {
        const newTask = element('div', {class: "task", id: `${task.title}-${task.getID()}`, 'data-id': task.getID()})

        if (task.getStatus()) newTask.classList.add('completed');
        
        const title = () => {

            const titleBar = element('div', {'class': "task-title-bar"});
            
            const editButton = element('input', {'type': 'image', 'src': editTaskIcon, 'class': 'task-button', 'id': 'task-edit-button', 'value': 'Edit'});
            editButton.addEventListener('click', () => editTask(task));
            titleBar.appendChild(editButton);


            const title = element('h2', {'class': "task-title"});
            title.textContent = task.getTitle();;
            titleBar.appendChild(title);            


            const completeButton = element('input', {'type': 'image', 'src': finishTaskIcon, 'class': 'task-button', 'id': 'task-complete-button', 'value': 'CHK'});
            completeButton.addEventListener('click', (e) => {
                   
                
                toggleTaskStatus(task);
                
                // Refresh task or close task depending on whether task is being marked compelte
                task.getStatus() ?  closeTask(newTask) : renderTask(task);
   

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

           // const priority = makeContainer('task-deadline', editDeadlineIcon);
           const priority = element('div', {'class': `task-deadline-container`});
           
           const priorityHeader = element ('h3', {'class': `task-deadline-header`});  
           priorityHeader.textContent = "Priority: "   
           
           const editDeadlineButton = element('input', {'type': 'image', 'src': editDeadlineIcon,  'id': `task-deadline-button`, 'class': 'container-button expand-content-btn', }, );
           editDeadlineButton.addEventListener('click', () => openDeadlineForm(task))
        
            const switchPriorityButton = element('input', {'type': 'button', 'class': `priority-button task-item ${priorityStyle(task).priorityValue}`, 'value': priorityStyle(task).priorityText});
            switchPriorityButton.addEventListener('click', () => cyclePriority(task));

            const deadline = element('h4', {'class': "task-deadline task-item", "id": `${task.deadline}-deadline`});
            deadline.textContent = format(task.getDeadline(), "MM.dd.yyyy");
            
            appendChildren(priority, priorityHeader, editDeadlineButton, switchPriorityButton, deadline);

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
        // Show date of completed task when checked
        const complete = () => {

            const container = element('div', {'class': 'task-deadline-complete', 'id': 'task-deadline-complete'});
            const header = element('h4', {'class': 'task-complete-header'});
           
            header.textContent = `Task completed ${format(task.getCompletionDate(), 'MM.dd.yyyy')}`
            container.appendChild(header);

            return container; 
        }
     

        // Creation of button bar
        const buttonBar = () => {

            const buttons = element("div", {'class': 'button-bar', 'id': 'task-buttons'});

            // Delete button currently hidden until task in edit mode
            const deleteButton = element('input', {'type': 'image', 'src': deleteTaskIcon, 'alt': 'Delete task', 'class': 'task-button delete-task hidden', 'id': 'delete-task', 'value': 'Delete'})
            deleteButton.addEventListener('click', (e) => {
                deletePopup();
            });
            buttons.appendChild(deleteButton);
          
            const closeButton = element('input', {'type': 'image', 'src': closeTaskIcon,'alt': 'Close Task', 'class': 'task-button close-task'});
            closeButton.addEventListener('click', (e) => closeTask(e.target.parentNode.parentNode));
            buttons.appendChild(closeButton);                
        

            return buttons;

        }

        const deletePopup = () => {

            const parent = document.querySelector('body');
            const content = document.querySelector("#workspace");    
            content.classList.add('blockscreen');

            const popup = element('div', {'class': 'task-UI popup', 'id': 'delete-task-screen'});
            const title = element('h3', {'class': 'popup-item popup-title delete-popup', 'id': 'delete-task-title'});
            title.textContent = `Confirm remove '${task.getTitle()}' from project?`;
            const confirm = element('input', {'type': 'image', 'src': confirmIcon, 'alt': 'confirm delete', 'class': 'task-button popup-item popup-confirm', 'id': 'delete-task-confirm', 'display': 'none'})
                confirm.addEventListener('click', (e) => {
                    deleteTask(task);
                    closeTask(newTask);
                    closePopup();
                })
            const cancel = element('input', {'type': 'image','src': closeTaskIcon, 'alt': 'cancel delete', 'class': 'task-button popup-item popup-cancel', 'id': 'delete-task-cancel' });
                cancel.addEventListener('click', () => {
                    closePopup();
                });

            const closePopup = () => {
                popup.remove();
                content.classList.remove('blockscreen');
            }
           appendChildren(popup, title, confirm, cancel);
           parent.appendChild(popup);

        
        }


        newTask.appendChild(title());
        newTask.appendChild(description());
        newTask.appendChild(priority());
        //newTask.appendChild(goal());
        newTask.appendChild(buttonBar());
        if (task.getStatus()){
          
            newTask.appendChild(complete()); 
        } 

        return newTask;
        
    }
    
    content.appendChild(taskPopup());
}
const toggleTaskStatus = (task) => {

    if (task == null) return;

    if (task.getStatus() === false){
        task.setStatus(true);
        task.setCompletionDate(new Date());

        task.getParent().tasks.completeTask(task);
        repeatTask(task);
    }
    else{
        task.setStatus(false)
        task.setCompletionDate(null);
        task.getParent().tasks.removeComplete(task);
    }
  

    renderTaskList(task.getParent());

}    //const repeatedTask = Task(task.getTitle(), task.getDeadline(), task.getPriority(), task.getDescription(), task.getGoal(), task.getID(), false, task.getCompletionDate(), task.getRepeat());


const repeatTask = (task) => {

    const repeat = task.getRepeat();
    const project = task.getParent();

    console.log(task.getParent().tasks.getTaskList())

    // why doesnt this work??
    //const repeatedTask = cloneDeep(task);
    const repeatedTask = Task(task.getTitle(), task.getDeadline(), task.getPriority(), task.getDescription(), task.getGoal(), task.getID(), false, task.getCompletionDate(), task.getRepeat());

    console.log(task === repeatedTask);
    console.log(repeatedTask);

    if (repeat === 'none') return;

    switch(repeat){

        case 'daily': 
            repeatedTask.setDeadline(addDays(task.getCompletionDate(), 1));
            break;
             
        case 'weekly':
            repeatedTask.setDeadline(addWeeks(task.getCompletionDate(), 1));
            break;
        case 'monthly': 
            repeatedTask.setDeadline(addMonths(task.getCompletionDate(), 1));
            break;
    }
    

    project.tasks.addTask(repeatedTask);
    console.log(project.tasks.getTaskList().length)
    console.log(project.tasks.getTaskList());
    repeatedTask.setParent(project);

}


const cyclePriority = (task) => {

    const curPriority = task.getPriority();

    // Priority is 1-3, cycle to next priority level
    changePriority(task, (((curPriority) % 3) + 1));


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

    if (DOM != null){
        DOM.remove();
        return
    }
    const task = document.querySelector('.task');
    task.remove();



}


const createTask = (container, project) => {

    const task = Task();
    task.setParent(project);
    
   
    //const taskList = (container)
    //taskList.insertBefore(createMiniTask(project, task), taskList.lastElementChild);
   
    // Add to object
    project.tasks.addTask(task);
    task.getID();

}


const editTask = (task) => {
    
    //const project = task.getParent();
    const tempTask = Task();

    const content = tempTask;

    // Alter UI elements
    const completionButton = document.querySelector('#task-complete-button');
    completionButton.classList.add("disabled");

    const deleteButton = document.querySelector('#delete-task');
    deleteButton.classList.remove('hidden');

    const editButton = document.querySelector('#task-edit-button');
    editButton.classList.add('hidden');

    const deadlineContainer = document.querySelector(".task-deadline-container");
    deadlineContainer.classList.add('disabled');

    // Prepare to replace with edit boxes and create save button
    const buttonBar = document.querySelector('.task-title-bar');
    const title = document.querySelector('.task-title');
   
    const saveButton = element('input', {'type': 'image', 'src': saveTaskIcon, 'class': 'task-edit-button task-button', 'id': 'task-edit-button', 'value': 'Save'})

    saveButton.addEventListener('click', () => {

        content.setTitle(newTitle.value);
        content.setDescription(newDescription.value);
        //content.setGoal(newGoal.value);
        saveButton.remove();
        editButton.classList.remove('hidden');

        saveToTask();
    })

    // Finalize saving data to task from temporary container
    const saveToTask = () => {

        task.setTitle(content.getTitle());
        task.setDescription(content.getDescription());
        task.setGoal(content.getGoal());
   
        closeTask(buttonBar.parentNode);
        closeProject();
        renderProject(task.getParent());
        renderTask(task);

    }

    
    buttonBar.insertBefore(saveButton, title);

    // Refresh UI with new data
    const newTitle = editTitle('task');
    const newDescription = editDescription('task');


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

}
const openDeadlineForm = (task) => {

    //Alter Task UI Elements
    disableTaskUI();


    const container = element('div', {'class': 'form-container', 'id': 'deadline-form-container'});
  
    container.appendChild(deadlineForm(task));
    const parent = document.querySelector('body');
    parent.appendChild(container);
  

}

const disableTaskUI = () => {

    const task = document.querySelector('.task');
    task.classList.add('disabled');


}



const updateDeadline = (task, form) => {

    const DEFAULTTIME = "00:00:01"

    const deadlineData = new FormData(form);

    let newDay = deadlineData.get('date');
    let newTime = deadlineData.get('time');

    const repeat = deadlineData.get('repeat');
    task.setRepeat(repeat)
    console.log(task.getRepeat());
   
    if (newTime == ""){
        console.log('no time set, setting to midnight')
        newTime = DEFAULTTIME;
    }

   

    // format ISO and create new deadline
    const newDeadline = new Date(newDay + 'T' + newTime)

    task.setDeadline(newDeadline);
  
    renderTask(task);


}

const deadlineForm = (task) => {

    const FORM_HEADER = "Select Deadline"
    
    const formContainer = element('div', {"id": "form-container"});
    const form = element('form', {"id": "deadline-form"});

    const dateLabel = element('label', {"for": "date", "class": "form-label", "id": "date-label"});
    dateLabel.textContent = "Date";

    
    const date = element("input", {"type": "date", "class": "form-input", "name": "date", "id": "form_date", "min": today, 'value': format(task.getDeadline(), "yyyy-MM-dd"), "required": ""});
    dateLabel.appendChild(date);

    const timeLabel = element('label', {"for": "time", "class": "form-label", "id": "time-label"});
    timeLabel.textContent = "Time";
    const time = element('input', {"type": "time", "class": "form-input", "name": "time", "id": "form_time", 'value': format(task.getDeadline(), "HH:mm:SS") });
    timeLabel.appendChild(time);

    const buttonBar = element('div', {'class': 'button-bar form-buttons', 'id': 'form-buttons'})
        const submitDeadline = element('input', {'type': 'image', 'src': saveTaskIcon, 'alt': 'confirm deadline', 'class': 'form-button task-button', 'id': 'submit-deadline-button'})
  
        const close = element('input', {'type': 'image', 'src': closeTaskIcon, 'alt': 'close without changes', 'class': 'form-button task-button', 'id': 'close-deadline-button'})
            close.addEventListener('click', (e) => {
               
                e.preventDefault();
                formContainer.remove();
                renderTask(task);
                
            })
    appendChildren(buttonBar, submitDeadline, close)
    
    const repeatOptions = () => {
       
        const chooseRepeat = element('fieldset', {'class': 'fieldset', 'id': 'task-deadline-fieldset'})
        const legend = element('legend',{"value": 'repeat?'})
        legend.textContent = "Repeat every..."
          
        const none = makeRadio('repeat', 'weekly', `Don't repeat`, true);
        const daily = makeRadio ('repeat', 'daily', 'Once per day');
        const weekly =  makeRadio('repeat', 'weekly', 'Every week');
        const monthly = makeRadio('repeat', 'monthly', 'Once a month');

        appendChildren(chooseRepeat, legend, none, daily, weekly, monthly);


        return chooseRepeat
    }

    form.appendChild(repeatOptions());
    form.appendChild(buttonBar);
   
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        updateDeadline(task, form)
        formContainer.remove();
        renderTaskList(task.getParent())
    });
    const formHeader = element("h2", {'class':'form-header deadline-form'});
    formHeader.textContent = FORM_HEADER;

   
appendChildren(form, dateLabel, timeLabel, formHeader);
formContainer.appendChild(form);
return formContainer;

};




export {editTask, createTask, closeTask, renderTask, priorityStyle, toggleTaskStatus}