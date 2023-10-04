import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-myc01',
  templateUrl: './myc01.component.html',
  styleUrls: ['./myc01.component.css']
})
export class Myc01Component implements OnInit{
  timer:TimerService = null

  constructor(timer:TimerService){
    this.timer = timer
    //console.log(timer)

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  doLogin(){

    this.timer.start()
    console.log("login starts")
    console.log("login ends")
    this.timer.end('login')
    

  }


  doRegister(){

    this.timer.start()
    console.log("register starts")
    console.log("register ends")

    this.timer.end('register')
    
  }

}
