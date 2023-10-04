import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from '../models/new-user.model';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class NewUserServiceService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<NewUser[]> {
    return this.http.get<any>(`${environment.baseUrl}/employee/allNewUsers`);
  }

  public addUser(user: NewUser): Observable<NewUser> {
    console.log('addNewUser', user);
    console.log(`${environment.baseUrl}/employee/addNewUser`);
    //let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    //let options = new RequestOptions({ headers: headers });
    return this.http.post<NewUser>(
      `${environment.baseUrl}/employee/addNewUser`,
      user
    );
  }

  public updatedNewUser(user: NewUser): Observable<NewUser> {
    return this.http.put<NewUser>(
      `${environment.baseUrl}/employee/updateNewUser`,
      user
    );
  }
}
