import { Component } from '@angular/core';
import { SimpleServiceService } from '../services/simple-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  //constructor(public service:SimpleServiceService){}
  empList = [
    {eid:0,ename:'liang',salary:5000,birthday:'april',sex:0,zzmm:10},
    {eid:1,ename:'zhang',salary:5000,birthday:'april',sex:0,zzmm:20},
    {eid:2,ename:'peter',salary:5000,birthday:'april',sex:0,zzmm:30}

  ]

  emp={eid:0};
  len=0;

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void{
    //console.log(this.len);
    this.route.paramMap.subscribe(value=>{
      let n = value.get('id');
      this.emp = this.empList[n];
      this.len=(Object.keys(this.emp)).length;
      console.log(this.emp);
      console.log(this.len);

      
    })
  }

}
