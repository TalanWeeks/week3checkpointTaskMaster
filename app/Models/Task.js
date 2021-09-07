import { generateId } from "../Utils/generateId.js"
import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksServices.js"


export class Task{
  constructor(taskData){
    this.name = taskData.name     
    this.id = taskData.id ||generateId()
    this.taskId = generateId()
    this.checked = taskData.checked   
    this.color =  taskData.color
  }
  
  
  get taskTemplate(){
    return /*html*/`
    <div class="p-2">
      <label for ="checked">
      </label>
      <input type="checkbox" id="checked" class="checked" value='false' ${this.checked ? "checked" : ""} onclick="app.tasksController.checkTasks('${this.taskId}')"></input>
      <label class="p-2 task-slasher"for="task" id="task-slasher">${this.name}</label>
      <i class="mdi mdi-delete mdi-16px text-danger selectable"
      onclick="app.tasksController.deleteTask('${this.taskId}')"></i>
    </div>
    `
  }

  
 
  
  
}