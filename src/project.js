import { Task, getUrgency } from "./todo";
import defaultProject from "./default-project.json"
import { parseISO, toDate } from "date-fns";

// Create an object containing todo objects


// Project object factory
// Project(title, date, deadline, priority, description, goal)
// Load defaults from default-project.json
const Project = (title = defaultProject.title, deadline = defaultProject.deadline, priority = defaultProject.priority, description = defaultProject.description, goal = defaultProject.goal ) => {

    // Define own info with Task object
    //const info = Task(defaultProject.title, defaultProject.deadline, defaultProject.priority, defaultProject.description)
    
    deadline = new Date(deadline);
   
    const startDate = new Date(Date.now())
    const timeRemaining = deadline - Date.now();

    let _taskList = [];
    let _completedTasks = [];
    let _incompleteTasks = [];

   

    // task module
    const tasks = (() => {

        const addTask = (task) => {
             
            _taskList.push(task)
        }
    
        const deleteTask = (task) => {
            
            const taskElement = _taskList.indexOf(task);
            _taskList.splice(taskElement, 1); 
        }
    
        const completeTask = (task => {
            _completedTasks.push(_taskList.slice(task));
             deleteTask(task)
    
        })

        const getTaskList = () => _taskList;
        const getCompletedTasks = () => _completedTasks;
        const getInCompleteTasks = () => _incompleteTasks;
        const taskCount = _taskList.length;

        return {taskCount, addTask, deleteTask, completeTask, getTaskList, getCompletedTasks, getInCompleteTasks, _taskList}

    })();
  
    const content = (() => {

    // Modify Content
    
    const setTitle = (newTitle) => {
        title = newTitle;
    }
    const getTitle = () => title;

    const setDeadline = (newDeadline) => deadline = newDeadline;
    const getDeadline = () => deadline;

    const setDescription = (newDescription) => {
        description = newDescription
    }
    const getDescription = () => description;

    const setPriority = (newPriority) => {

        priority = newPriority;
    }

    const getPriority = () => priority;

    const setGoal = (newGoal) => goal = newGoal;

    const getGoal = () => goal;

    const getContent = () => {

        return {title, deadline, priority, description};
    }

    return {setTitle, getTitle, getDeadline, setDeadline, setDescription, getDescription, getContent, setPriority, getPriority, setGoal, getGoal, }


    
})();

  return { tasks, _taskList, content}
}




export { Project}