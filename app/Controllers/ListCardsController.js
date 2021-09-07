import { ProxyState } from "../AppState.js";
import { listCardsService } from "../Services/ListCardsService.js";
import { generateId } from "../Utils/generateId.js";


function _drawTaskCard(){
  let listCards = ProxyState.lists;
  let listTemplate = ''
  listCards.forEach(list => listTemplate += list.listTemplate)
  document.getElementById("task-card").innerHTML= listTemplate
}

export class ListCardsController{

  constructor(){
    ProxyState.on("lists",_drawTaskCard);
    ProxyState.on("tasks",_drawTaskCard);
    _drawTaskCard()
  }

    addListCard(listData){
      listCardsService.addListCard(listData)
    }
    
    createTaskCard(listDataId){
      event.preventDefault()
      let form = event.target
      
      let listData = {
        //@ts-ignore
        name: form.name.value,
        //@ts-ignore
        color: form.color.value,
        id: generateId()
      }
      
      document.getElementById("delete-storage").classList.remove("visually-hidden")
      listCardsService.addListCard(listData)
        //@ts-ignore
      form.reset()
    }
  
      deleteList(listDataId){
        console.log("does it make it to here?")
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
              'Your list has been deleted.',
              'success'
              )
              listCardsService.deleteList(listDataId)
          }
        })
         }
}