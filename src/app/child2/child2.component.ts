import { Component } from '@angular/core';
import { SimpleServiceService } from '../services/simple-service.service';

const template =`
<hr/>
<h2>Child2 component</h2>
<h3>{{message}}</h3>
`

@Component({
  selector: 'app-child2',
  template:template,
})
export class Child2Component {

  message:string;
  constructor(private simpleservice:SimpleServiceService){

  }

  ngOnInit():void{
    this.message  = this.simpleservice.sayHello("Child2");
  }

}
