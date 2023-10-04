import { Component } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import { Employee } from '../models/employee';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent {
  public employees: Employee[];

  constructor(public eS: EmployeesService) {
    this.eS.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
