import { Task, getUrgency } from "./todo";
import defaultProject from "./default-project.json"


// Create an object containing todo objects


const Project = (info) => {

    // Define own info with Task object
    //const info = Task(defaultProject.title, defaultProject.deadline, defaultProject.priority, defaultProject.description)

    
    let _taskList = [];
    let _completedTasks = [];
    let _incompleteTasks = [];

  
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

        return {addTask, deleteTask, completeTask, getTaskList, getCompletedTasks, getInCompleteTasks}

    })();
  

    const taskCount = _taskList.length;

    return {...info, tasks}
}



export { Project}