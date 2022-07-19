//  To do object, creation and modification

// Helper functions located in utils file
import { isThisSecond, isEqual, formatDistance, formatISO, format } from 'date-fns';
import { setAttributes, createElement as element } from './utils.js';

// Constants

// Factory to create a ToDo object
const createToDo = (title, deadline, priority, description) => {


  
    // Time/Date based attributes
    const startDate = new Date(Date.now())
    const timeRemaining = deadline - Date.now();

    const content = (() => {

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
        return {setDescription, getDescription, setTitle, getTitle, getContent}
    })();


    return ({priority,  content, startDate, timeRemaining,});

}


// Lower urgency is considered more urgent. Closest to zero is most urgent.
const getToDoUrgency = (toDoObject) => {
        
    // Get days onl
    const urgency = format(toDoObject.timeRemaining, "dd");
    console.log(urgency * toDoObject.priority);

    return urgency;
}








export {createToDo as ToDo, getToDoUrgency as getUrgency};



