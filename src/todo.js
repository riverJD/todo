//  To do object, creation and modification. Ocassionally referred to as a Task.

// Helper functions located in utils file
import { isThisSecond, isEqual, formatDistance, formatISO, format, getHours, differenceInHours } from 'date-fns';
import { setAttributes, createElement as element } from './utils.js';
import task from "./default-task.json";
import { eachHourOfIntervalWithOptions } from 'date-fns/fp';
//import task from "./example-task.json";
// Constants

// Factory to create a ToDo object
const createTask = (title = task.title, deadline = task.deadline, priority = task.priority, description = task.description, taskID = task.taskID, completed = task.completed, completionDate = task.completionDate, repeat = task.repeat) => {

    deadline = new Date(deadline);
    
    // Project object that owns this task
    let parent = null;
    // Time/Date based attributes
    const startDate = new Date(Date.now())
    const timeRemaining = deadline - (new Date(Date.now()));


    const setTitle = (newTitle) => {
        title = newTitle;
    }
    const getTitle = () => title;

    const setDescription = (newDescription) => {
        description = newDescription
    }
    const getDescription = () => description;

    const setDeadline = (newDeadline) => deadline = newDeadline;
    const getDeadline = () => deadline;

    const setCompletionDate = (newCompletionDate) => completionDate = newCompletionDate;
    const getCompletionDate = () => completionDate;
    
    const setPriority = (newPriority) => {
        priority = newPriority;
    }
    const getPriority = () => priority;
 
    const setParent = (newParent) => parent = newParent;
    const getParent = () => parent;

    const setID = (newID) => taskID = newID;
    const getID = () => taskID;

    const setStatus = (newStatus) => completed = newStatus;
    const getStatus = () => completed;

    const getContent = () => {

        return {title, deadline, priority, description};
    }

    const getUrgency = () => {

        const today = new Date();
        const hoursRemain = differenceInHours(getDeadline(), today)

        const urgency = hoursRemain * getPriority();
        console.log(`debug: urgency: ${urgency}`);
        return(urgency);
    }

    const setRepeat = (repeatType) => { repeat = repeatType }
    const getRepeat = () => repeat;


    return ({setRepeat, getRepeat, getUrgency, getCompletionDate, setCompletionDate, setStatus, getStatus, getID, setID, setParent, getParent, setDeadline, getDeadline, getPriority, setPriority, title, deadline, priority, description, priority,  content, startDate, timeRemaining,setDescription, getDescription, setTitle, getTitle, getContent,});

}






export {createTask as Task}



