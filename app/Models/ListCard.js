import { generateId } from "../Utils/generateId.js";
import { ProxyState } from "../AppState.js"

export class ListCard{
  constructor(listData){
    this.name= listData.name 
    this.id= listData.id || generateId()
    this.color= listData.color 
  }

  get listTemplate() {
    return /*html*/`
  <div class="col-lg-5 p-0 m-2 shadow">
  <div class="card border-dark text-light bg-dark">
<!-- TODO probably use a ternary to get the bg-color of the title to change with to whatever user selects (this.color) -->
    <div class="d-flex justify-content-between align-items-center bg-${this.color}">
    <h3 class= " text-light text-center p-3">${this.name}</h3>
    <h3></h3>
    <i class="mdi mdi-delete mdi-36px text-dark selectable"
    onclick="app.listCardsController.deleteList('${this.id}')"></i>
    </div>
    <h6 id="checked-var"></h6>
    <div class="col-lg-12" id="tasks" >
    ${this.Tasks}
      
    </div>
      <form onsubmit="app.tasksController.createTask('${this.id}','${this.color}')">
        <div class="form-group p-3">
          <label class="visually-hidden"for="taskName">Task Name</label>
          <input type="text" name= "name" 
          placeholder="Add Task..." 
          minlength="3" maxlength="50" required>
          <button type="submit" class="btn btn-warning">+</button>
        </div>
      </form>
  </div>          
</div>


    `

  }
  get Tasks(){
    let taskTemplate = ''
   
    let foundTasks = ProxyState.tasks.filter(t => t.id == this.id)
    console.log('after filter', foundTasks)
    foundTasks.forEach(task => taskTemplate += task.taskTemplate)
    return taskTemplate
  
  }
}
