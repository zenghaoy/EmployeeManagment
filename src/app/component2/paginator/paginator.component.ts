import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { from, Observable } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, of, catchError } from 'rxjs';
import { environment } from 'src/environments/environments';
import { PageServiceService } from '../../services/page-service.service';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../models/employee';
import { HttpErrorResponse } from '@angular/common/http';
import { NewUserServiceService } from 'src/app/services/new-user-service.service';
import { NewUser } from 'src/app/models/new-user.model';
import { Route, Router } from '@angular/router';
import { SharedDataService } from 'src/app/util/data-service/user/shared-data-service';

export interface PeriodicElement {
  id: number;
  name: string;
  email: string;
  imageUrl: string;
  jobTitle: string;
  phone: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     jobTitle: '1',
//     name: 'Hydrogen',
//     email: '1.0079',
//     phone: 'H',
//     imageUrl: 'H',
//     id: 1,
//   },
//   {
//     jobTitle: '2',
//     name: 'Helium',
//     email: '4.0026',
//     phone: 'He',
//     imageUrl: 'H',
//     id: 2,
//   },
//   {
//     jobTitle: '3',
//     name: 'Lithium',
//     email: '6.941',
//     phone: 'Li',
//     imageUrl: 'H',
//     id: 1,
//   },
//   {
//     jobTitle: '4',
//     name: 'Beryllium',
//     email: '9.0122',
//     phone: 'Be',
//     imageUrl: 'H',
//     id: 1,
//   },
//   {
//     jobTitle: '5',
//     name: 'Boron',
//     email: '10.811',
//     phone: 'B',
//     imageUrl: 'H',
//     id: 1,
//   },
//   {
//     jobTitle: '6',
//     name: 'Carbon',
//     email: '12.0107',
//     phone: 'C',
//     imageUrl: 'H',
//     id: 1,
//   },
//   {
//     jobTitle: '7',
//     name: 'Nitrogen',
//     email: '14.0067',
//     phone: 'N',
//     imageUrl: 'H',
//     id: 1,
//   },
//   {
//     jobTitle: '8',
//     name: 'Oxygen',
//     email: '15.9994',
//     phone: 'O',
//     imageUrl: 'H',
//     id: 1,
//   },
//   {
//     jobTitle: '9',
//     name: 'Fluorine',
//     email: '18.9984',
//     phone: 'F',
//     imageUrl: 'H',
//     id: 1,
//   },
//   {
//     jobTitle: '10',
//     name: 'Neon',
//     email: '20.1797',
//     phone: 'Ne',
//     imageUrl: 'H',
//     id: 1,
//   },
// ];

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
  // standalone: true,
  // imports: [MatTableModule],
})
export class PaginatorComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'role', 'action'];
  dataSource: any;
  //data: any;
  userForms: NewUser[];
  userForm: NewUser;

  ELEMENT_DATA: PeriodicElement[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private sharedDataService: SharedDataService,
    private _liveAnnouncer: LiveAnnouncer,
    private pS: PageServiceService,
    private nS: NewUserServiceService,
    private router: Router
  ) {
    console.log('paginator constructor');

    this.userForms = this.sharedDataService.getUserForms('paginator');
    console.log('form in paginator', this.userForms);
    this.dataSource = new MatTableDataSource(this.userForms);

    // this.nS.getUsers().subscribe(
    //   (response: NewUser[]) => {
    //     console.log(response[0].email);
    //     this.dataSource = new MatTableDataSource(response);
    //     console.log(this.dataSource);
    //     this.dataSource.sort = this.sort;
    //     this.dataSource.paginator = this.paginator;
    //     //console.log(this.users);
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );

    //   console.log('afgter Completed');
    //   console.log(this.dataSource);
    //   console.log('ngOnit');
    //   this.data = fromFetch(`${environment.baseUrl}/employee/all`).pipe(
    //     switchMap((response) => {
    //       if (response.ok) {
    //         // OK return data
    //         console.log('get user data');
    //         return response.json();
    //       } else {
    //         // Server is returning a status requiring the client to try something else.
    //         return of({ error: true, message: `Error ${response.status}` });
    //       }
    //     }),
    //     catchError((err) => {
    //       // Network or other error, handle appropriately
    //       console.error(err);
    //       return of({ error: true, message: err.message });
    //     })
    //   );

    //   this.data.subscribe({
    //     next(result) {
    //       console.log(result[1]);
    //       this.ELEMENT_DATA = result;
    //       this.dataSource = new MatTableDataSource(result);
    //       console.log(this.dataSource);
    //       this.dataSource.sort = this.sort;
    //       this.dataSource.paginator = this.paginator;
    //     },
    //     error(err) {
    //       console.error('Error: ' + err);
    //     },
    //     complete() {
    //       console.log('Completed');
    //     },
    //   });
  }

  updateButton(obj: NewUser) {
    console.log(obj);
    console.log('/edit-user/' + obj.id);
    this.router.navigateByUrl('/edit-user/' + obj.id);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    //console.log(this.ELEMENT_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);

    console.log('ngAfterViewInit');
  }

  // setupFilter(column: string) {
  //   this.dataSource.filterPredicate = (
  //     d: TableDataSourceType,
  //     filter: string
  //   ) => {
  //     const textToSearch = (d[column] && d[column].toLowerCase()) || '';
  //     return textToSearch.indexOf(filter) !== -1;
  //   };
  // }

  // observer = {
  //   next: function (value) {},
  //   error: function (error) {},
  //   complete: function () {},
  // };

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  // ngOnInit() {
  //   this.dataService.fetchPosts().subscribe((contacts) => {
  //     this.dataSource = new MatTableDataSource(contacts);
  //     this.dataSource.sort = this.sort;
  //     this.dataSource.paginator = this.paginator;
  //   });
  // }
}
