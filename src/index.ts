import { GameManager } from "./store"
import { startLogge } from "./logger"


startLogge();
setInterval(()=>{
  GameManager.getInstance().addGame(Math.random().toString())
}, 5000)