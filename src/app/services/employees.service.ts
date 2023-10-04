import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private apiServerUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {
    console.log(this.http);
  }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<any>(`${this.apiServerUrl}/employee/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(
      `${this.apiServerUrl}/employee/add`,
      employee
    );
  }

  public updatedEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(
      `${this.apiServerUrl}/employee/update`,
      employee
    );
  }

  public deleteEmployees(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/%{id}`);
  }
}
