import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class PageServiceService {
  constructor() {
    console.log('page consturctor');
  }

  getAllPages() {
    const data = fromFetch(`${environment.baseUrl}/employee/all`).pipe(
      switchMap((response) => {
        if (response.ok) {
          // OK return data
          console.log('get user data');
          return response.json();
        } else {
          // Server is returning a status requiring the client to try something else.
          return of({ error: true, message: `Error ${response.status}` });
        }
      }),
      catchError((err) => {
        // Network or other error, handle appropriately
        console.error(err);
        return of({ error: true, message: err.message });
      })
    );

    data.subscribe({
      next(result) {
        console.log('paginator ngOnInit');
        console.log(result);
        return result;
        //this.ELEMENT_DATA = result;
      },
      error(err) {
        console.error('Error: ' + err);
      },
      complete() {
        console.log('Completed');
      },
    });
  }
}
