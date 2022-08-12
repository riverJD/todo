
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

  let taskCount = localStorage.length;
  console.log(taskCount);

  const storeTask = (task) => {
    
    // Store task in local storage with reference to parent and self id
    let storageName = `${task.parent.content.getID()}.${task.getID()}`
    console.log(storageName);
    console.log(parseTask(task));
    window.localStorage.setItem(storageName, JSON.stringify(parseTask(task)));
  
     loadTask(storageName);
     console.log(window.localStorage.getItem(storageName));
  
  }

  const loadTask = (taskName) => {

   console.log(JSON.parse(window.localStorage.getItem(taskName)));

  }

  return {storeTask, loadTask}

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



export { UI, storage}