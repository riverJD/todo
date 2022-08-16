
// The idea is to store this seperately from the project, to allow for loading UI settings detached from data

import { Project } from "./project";
import { Task } from "./todo";

const UI = (() => {

   

        let sortType = 'priority'
        let ascending = true

        const getSort = () =>  sortType;
        const setSort = (newSort) => sortType = newSort
    
      //  getAscending: () => ascending
      //  setAscending: (newAscending) => ascending = newAscending


        return {getSort, setSort,}

})();

const storage = (() => {

  const savedData = window.localStorage;
  let taskCount = localStorage.length;
  console.log(taskCount);

  const storeTask = (task) => {
    
    // Store task in local storage with reference to parent and self id
    //console.log(task.getParent)
    const parentProj = task.getParent();
    const storageName = `${parentProj.content.getID()}.${task.getID()}`
    console.log('storing task as ' + storageName);
    console.log(parseTask(task));
    const taskStorage = JSON.stringify(parseTask(task));
    window.localStorage.setItem(storageName, taskStorage);
  
    // loadTask(storageName);
    // console.log(window.localStorage.getItem(storageName));
  
  }
  


  const loadTask = (taskName) => {

   console.log(taskName)
   const taskStorage = JSON.parse(savedData.getItem(taskName));
   console.log(taskStorage)
   console.log(taskStorage.completed)
   const newTask = Task(taskStorage.title, taskStorage.deadline, taskStorage.priority, taskStorage.description, taskStorage.taskID, taskStorage.completed, taskStorage.completionDate, taskStorage.repeat, taskStorage.parent);
   
   return newTask;
  }

  const loadTasksToProject = (project) => {

    const taskCount = project.tasks.taskCount;
   
    for (let i = 0; i <= taskCount; i++){
      let task = loadTask(`${project.content.getID()}.${i}`)
      console.log(task)
      project.tasks.addTask(task);
      task.setParent(project);

    }

  }

  const storeProj = (project) => {

    const storageName = project.content.getID();
    const storageJSON = JSON.stringify(parseProj(project));
    console.log(`Storing project as ${storageName}.`)
    console.log(`Data to store: ${storageJSON}`)

    savedData.setItem(storageName, JSON.stringify(parseProj(project)))
    
  }

  const loadProject = (projectID) => {


    const projData = JSON.parse(savedData.getItem(projectID));
    
    const loadedProject = Project(projData.title, projData.deadline, projData.priority, projData.description, projData.goal, projData["data-project-id"]);
    loadTasksToProject(loadedProject);
    return loadedProject;   

  }



  return {storeProj, loadProject, storeTask, loadTask}

})();

const parseTask = (task) => {

  const taskData = {

    "title": task.getTitle(),
    "deadline": task.getDeadline(),
    "priority": task.getPriority(),
    "description": task.getDescription(),
    "taskID": task.getID(),
    "completed": task.getStatus(),
    "completionDate": task.getCompletionDate(),
    "repeat": task.getRepeat(),
    "parent": task.getParent().content.getTitle()
   

  }

  console.log(task.getStatus());

  return taskData;

}

const parseProj = (project) => {

  
const projData = {

  "title": project.content.getTitle(),
  "deadline": project.content.getDeadline(),
  "priority": project.content.getPriority(),
  "description": project.content.getDescription(),
  "goal": project.content.getGoal(),
  "data-project-id": project.content.getID(),
  "taskCount": project.tasks.taskCount
}

return projData

}



export { UI, storage}