import { Task, getUrgency } from "./todo";
import defaultProject from "./default-project.json"
import { parseISO, toDate } from "date-fns";

// Create an object containing todo objects


// Project object factory
// Project(title, date, deadline, priority, description, goal)
// Load defaults from default-project.json
const Project = (title = defaultProject.title, deadline = defaultProject.deadline, priority = defaultProject.priority, description = defaultProject.description, goal = defaultProject.goal, id = defaultProject["data-project-id"] ) => {

    // Define own info with Task object
    //const info = Task(defaultProject.title, defaultProject.deadline, defaultProject.priority, defaultProject.description)
    
    deadline = new Date(deadline);
   
    const startDate = new Date(Date.now())
    const timeRemaining = deadline - Date.now();
    
    // Will assign task ID sequentially
    let taskID = 0;

    let _taskList = [];
    let _completedTasks = [];
    let _incompleteTasks = [];
    // stores reference to tasks by Id.
    let _taskIdList = [];

   

    // All task related functions
    const tasks = (() => {

        const addTask = (task) => {
             setTaskID(task);
            _taskList.push(task)
            _taskIdList.push(task.getID())
        }
    
        const removeTask = (task) => {
            
            const taskElement = _taskList.indexOf(task);
            _taskList.splice(taskElement, 1); 
        }
    
        const completeTask = (task => {

            //if (_completedTasks.includes(task)) return;

            _completedTasks.push(_taskList.slice(task));
             //removeTask(task)
    
        })

        const removeComplete = (task) => {

            const taskElement = _completedTasks.indexOf(task);
            _completedTasks.splice(taskElement, 1); 
        }

        const setTaskID = (task) => {
            task.setID(taskID);
            taskID++;
        }

        const clearFinishedList = () => {
            _completedTasks = [];
        }



        const getTaskList = () => _taskList;
        const getTaskIdList = () => _taskIdList
        const getCompletedTasks = () => _completedTasks;
        const getInCompleteTasks = () => _incompleteTasks;
        const taskCount = _taskList.length;

        return {clearFinishedList, removeComplete, taskCount, addTask, removeTask, completeTask, getTaskList, getCompletedTasks, getInCompleteTasks, _taskList}

    })();
  
    // Content related functions
    const content = (() => {
        
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

        const setID = (newID) => id = newID;
        const getID = () => id;


        return {getID, setTitle, getTitle, getDeadline, setDeadline, setDescription, getDescription, getContent, setPriority, getPriority, setGoal, getGoal, }
})();






  return { tasks, _taskList, content}
}


export { Project}