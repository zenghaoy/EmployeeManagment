import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  startTime = 0
  endTime = 0

  constructor() { console.log("created")}

  start(){
    this.startTime =  new Date().getTime()
  }

  end(actionName){
    this.endTime = new Date().getTime()
    console.log(actionName+"spent ", this.endTime-this.startTime)

  }
}
