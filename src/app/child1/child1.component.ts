import { Component } from '@angular/core';
import { SimpleServiceService } from '../services/simple-service.service';
import { SimpleServiceUpdatedService } from '../services/simple-service-updated.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  providers:[{provide:SimpleServiceService,useClass:SimpleServiceUpdatedService}],
  viewProviders:[{provide:SimpleServiceService,useClass:SimpleServiceService}]

}) 
export class Child1Component {

  message:string;
  constructor(private simpleservice:SimpleServiceService){

  }

  ngOnInit():void{
    this.message = this.simpleservice.sayHello("Child1");
  }

}
