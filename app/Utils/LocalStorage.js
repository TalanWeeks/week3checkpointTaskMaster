import { ProxyState } from "../AppState.js";
import { ListCard } from "../Models/ListCard.js";
import { Task } from "../Models/Task.js";

export function saveState(){
  localStorage.setItem("tasks", JSON.stringify({
    tasks: ProxyState.tasks,
    lists: ProxyState.lists
  }))
}

export function loadState(){
  
  let data = JSON.parse(localStorage.getItem("tasks"))
  console.log("load state data", data)
  if(data != null){
    ProxyState.lists = data.lists.map(l => new ListCard(l))
    ProxyState.tasks = data.tasks.map(t => new Task(t))

  }
  console.log("loaded State")
}