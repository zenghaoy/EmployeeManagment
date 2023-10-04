import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { NewUser } from '../models/new-user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiServerUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {
    console.log(this.http);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<any>(`${environment.baseUrl}/employee/allUsers`);
  }
}
