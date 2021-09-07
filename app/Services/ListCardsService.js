import { ProxyState } from "../AppState.js";
import { ListCard } from "../Models/ListCard.js";
import { saveState } from "../Utils/LocalStorage.js";


class ListCardsService{

  constructor(){
    ProxyState.on("lists",saveState)
  }
  addListCard(listData){
    ProxyState.lists =[...ProxyState.lists, new ListCard(listData)]

    console.log("hello from ListCardsServices", (listData))
  }

  deleteList(listDataId){
    console.log("listcardsserveices delete",listDataId)
    ProxyState.lists = ProxyState.lists.filter(l => l.id !== listDataId)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.listDataId !== listDataId)
  }
}

export const listCardsService = new ListCardsService();