import { Component } from '@angular/core';
import { SimpleServiceService } from '../services/simple-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  //providers: [SimpleServiceService],
  
})
export class ParentComponent {

    //constructor(public service:SimpleServiceService){}
}
