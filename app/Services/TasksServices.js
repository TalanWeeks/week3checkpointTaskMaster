import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";

class TasksServices{

  constructor(){
    ProxyState.on("tasks",saveState)
    
  }
  addTask(taskData){
    ProxyState.tasks = [...ProxyState.tasks, new Task(taskData)]
    console.log("hello from TasksServices", ProxyState.tasks)
  }

  deleteTask(taskId){
    console.log("listcardsserveices delete",taskId)    
    
    ProxyState.tasks = ProxyState.tasks.filter(task => task.taskId !== taskId)
    ProxyState.tasks = ProxyState.tasks
    console.log("ProxyState.tasks", ProxyState.tasks)
    
  }

  checkTasks(taskId){
    let task = ProxyState.tasks.find(t => taskId == t.taskId)
    console.log('this is the task found checked',task);
    task.checked = !task.checked;
 
    ProxyState.tasks = ProxyState.tasks
  }

  deleteStorage(){
    localStorage.clear()
  }

  checkedOrNot(taskData){

    console.log("hello from checked or not")
    taskData.checked = true
    let checkedTasks=[]
    checkedTasks = ProxyState.tasks.filter(task => task.checked == true)  
    console.log(checkedTasks)  
  }

}

export const tasksService =  new TasksServices()