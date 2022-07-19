//  To do object, creation and modification

// Helper functions located in utils file
import { isThisSecond } from 'date-fns';
import { setAttributes, createElement as element } from './utils.js';

// Constants
const LOWURGENCY = 1;
const MEDURGENCY = 2;
const HIGHURGENCY = 3;




// Factory to create a ToDo object
const ToDo = (title, deadline, urgency, parentProject) => {


    // Object patitleters 

    this.title = title;
    this.urgency = urgency;
    this.description = "";
    this.parentProject = parentProject;

    // timeline methods for getting 
    this.startDate = "Today"
    this.curDate = "Today's Date"
    this.deadline = deadline;



const updateDescription = (description) => {
    return this.description = description
}

const updateDeadline = (newDeadline) => {
    console.log(this.deadline);
    return this.deadline = newDeadline;
}




};



export { ToDo};



