import { ListCardsController } from "./Controllers/ListCardsController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {
  
 listCardsController = new ListCardsController();

 tasksController = new TasksController();
}

loadState()

window["app"] = new App();
