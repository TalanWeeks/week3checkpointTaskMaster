import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksServices.js"


export class TasksController{
  constructor(){
    // const cb = document.getElementById('checked');
    // console.log(cb);
  }

  addTask(taskData){
    tasksService.addTask(taskData)
  }

  checkTasks(taskId){
   tasksService.checkTasks(taskId) 
    
  }

  deleteStorage(){
    tasksService.deleteStorage()
    //@ts-ignore
    window.location.reload(true)
  }
    createTask(listId){      
      event.preventDefault()
      let form = event.target
      
      let taskData = {
        //@ts-ignore
        name: form.name.value,
        id: listId,
        checked: false
        
        
      }
    tasksService.addTask(taskData)
    console.log('task creation', ProxyState.tasks)
    //@ts-ignore    
  }

  
  deleteTask(listDataId){
    //@ts-ignore 
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
    //@ts-ignore 

        Swal.fire(
          'Deleted!',
          'Your task has been deleted.',
          'success'
        )
        tasksService.deleteTask(listDataId) 
      }
    })
  }
}



// NOTE TESTER


// function _drawTask(){

//   let tasks = ProxyState.tasks;
//   let taskTemplate = ''

//   tasks.forEach(task => taskTemplate += task.taskTemplate)
//   document.getElementById("tasks").innerHTML= taskTemplate
// }

// export class TasksController{

//   constructor(){
//     ProxyState.on("tasks",_drawTask);
   
//   }

//     addListCard(taskData){
//       tasksService.addTask(taskData)
//     }
    
//     createTask(listDataId){
//       event.preventDefault()
//       let form = event.target
      
//       let taskData = {
//         //@ts-ignore
//         name: form.name.value,
//         //@ts-ignore        

//         id: listDataId
//       }

//       tasksService.addTask(taskData)      
//         //@ts-ignore
//       form.reset()
//     }
  
// }