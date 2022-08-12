
// The idea is to store this seperately from the project, to allow for loading UI settings detached from data

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
    let storageName = `${task.parent.content.getID()}.${task.getID()}`
    console.log(storageName);
    console.log(parseTask(task));
    window.localStorage.setItem(storageName, JSON.stringify(parseTask(task)));
  
    // loadTask(storageName);
    // console.log(window.localStorage.getItem(storageName));
  
  }
  


  const loadTask = (taskName) => {

   const taskStorage = JSON.parse(savedData).getItem(taskName);
   const newTask = Task(taskStorage.title, taskStorage.deadline, taskStorage.priority, taskStorage.description, taskStorage.taskID, taskStorage.completed, taskStorage.completionDate, taskStorage.repeat, taskStorage.parent);
  }

  const storeProj = (project) => {

    let storageName = project.content.getID()

    savedData.setItem(storageName, JSON.stringify(parseProj(project)))
    
  }


  const loadDataFromStorage = () => {

    let loadedTasks = [];
    let loadedProjs = [];
    
    const storageCount = savedData.length;
    console.log(storageCount)
  
    for (let data of savedData){

      if ('data-project-id' in data){
      
      loadedProjs.push(data)

      }

      
    }

    console.log(loadedProjs);

  }





  return {storeTask, loadTask, loadDataFromStorage}

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
  "taskCount": project.tasks.getTaskList().length
}

return projData

}



export { UI, storage}