import { Injectable } from '@angular/core';

@Injectable()
export class SimpleServiceUpdatedService {

  constructor() { }

  sayHello(name:String){
    return "Heloo" + name + "simple updated service";
  }
}
