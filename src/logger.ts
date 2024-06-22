import { GameManager } from "./store"


export function startLogge(){
  setInterval(()=>{
    GameManager.getInstance().log();
  }, 5000)
}