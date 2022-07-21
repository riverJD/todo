//  To do object, creation and modification

// Helper functions located in utils file
import { isThisSecond, isEqual, formatDistance, formatISO, format } from 'date-fns';
import { setAttributes, createElement as element } from './utils.js';
//import task from "./default-task.json";
import task from "./example-task.json";
// Constants

// Factory to create a ToDo object
const createToDo = (title = task.title, deadline = task.deadline, priority = task.priority, description = task.description, goal = task.goal) => {

    deadline = new Date(deadline);
  
    // Time/Date based attributes
    const startDate = new Date(Date.now())
    const timeRemaining = deadline - Date.now();


    const setTitle = (newTitle) => {
        title = newTitle;
    }

    const getTitle = () => title;

    const setDescription = (newDescription) => {
        description = newDescription
    }

    const setDeadline = (newDeadline) => deadline = newDeadline;
    const getDeadline = () => deadline;

    const getDescription = () => description;

    const getContent = () => {

        return {title, deadline, priority, description};
    }
    const setPriority = (newPriority) => {

        priority = newPriority;
    }

    const getPriority = () => priority;
 
    const setGoal = (newGoal) => goal = newGoal;

    const getGoal = () => goal;
 


    return ({setGoal, getGoal, setDeadline, getDeadline, getPriority, setPriority, title, deadline, priority, description, priority,  content, startDate, timeRemaining,setDescription, getDescription, setTitle, getTitle, getContent,});

}


// Lower urgency is considered more urgent. Closest to zero is most urgent.
const getTaskUrgency = (toDoObject) => {
        
    // Get days onl
    const urgency = format(toDoObject.timeRemaining, "dd");
    console.log(urgency * toDoObject.priority);

    return urgency;
}








export {createToDo as Task, getTaskUrgency as getUrgency};



