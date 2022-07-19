//  To do object, creation and modification

// Helper functions located in utils file
import { isThisSecond, isEqual, formatDistance, formatISO, format } from 'date-fns';
import { setAttributes, createElement as element } from './utils.js';
import task from "./default-task.json";
// Constants

// Factory to create a ToDo object
const createToDo = (title = task.title, deadline = task.deadline, priority = task.priority, description = task.description, goal = task.goal) => {

    
  
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

    const getDescription = () => description;

    const getContent = () => {

        return {title, deadline, priority, description};
    }

 
 


    return ({title, deadline, priority, description, priority,  content, startDate, timeRemaining,setDescription, getDescription, setTitle, getTitle, getContent,});

}


// Lower urgency is considered more urgent. Closest to zero is most urgent.
const getToDoUrgency = (toDoObject) => {
        
    // Get days onl
    const urgency = format(toDoObject.timeRemaining, "dd");
    console.log(urgency * toDoObject.priority);

    return urgency;
}








export {createToDo as Task, getToDoUrgency as getUrgency};



