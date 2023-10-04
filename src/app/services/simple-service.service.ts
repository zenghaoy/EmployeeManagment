import { Injectable } from '@angular/core';

@Injectable()
export class SimpleServiceService {

  //value:string;

  constructor() { }

  sayHello(name:String){
    return "Heloo" + name + "simple service";
  }
}
