import { LiveAnnouncer } from '@angular/cdk/a11y';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { NewUser } from 'src/app/models/new-user.model';
import { SecondAgency } from 'src/app/models/second-agency.model';
import { UserHistory } from 'src/app/models/user-history.model';
import { NewUserServiceService } from 'src/app/services/new-user-service.service';
import { SharedDataService } from 'src/app/util/data-service/user/shared-data-service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  id: number;
  userForms: NewUser[];
  userForm: NewUser = new NewUser();
  // 1,
  // 'firstname',
  // 'surname',
  // 'email',
  // 'o1',
  // 'o1',
  // 'o1',
  // true,
  // 1234,
  // 'o1',
  // 'o1',
  // true,
  // false
  formGroup: FormGroup | undefined;
  buttonStatus: boolean = true;
  displayedColumns: string[] = [
    'record_date',
    'action_column',
    'modified_by',
    'modified_values',
  ];
  dataSource: any;

  //@ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private sharedDataService: SharedDataService,
    private nS: NewUserServiceService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.userForms = this.sharedDataService.getUserForms('edit user');
    this.userForm = this.userForms[this.id - 1];
    console.log('form in eidt: ', this.userForm);

    if (this.userForm?.secondAgency == null) {
      this.userForm.secondAgency = new SecondAgency();
    }

    if (this.userForm?.history == null) {
      this.userForm.history = [];
    }
    //console.log('hostory in eidt: ', this.userForm.history[0].action);
    this.dataSource = new MatTableDataSource(this.userForm.history);

    this.buildFormValidation();
  }

  ngAfterViewInit() {
    //console.log(this.ELEMENT_DATA);
    //this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  private buildFormValidation() {
    this.formGroup = this.formBuilder.group({
      firstNameController: [
        this.userForm!.firstname ?? null,
        Validators.required,
      ],
      surnameController: [this.userForm!.surname ?? null, Validators.required],
      emailController: [this.userForm!.email ?? null],
      rankController: [this.userForm!.rank ?? null, Validators.required],
      titleController: [this.userForm!.title ?? null, Validators.required],
      roleController: [this.userForm!.role ?? null, Validators.required],
      isBadgeController: [this.userForm!.isBadge ?? null, Validators.required],
      badgeNoController: [this.userForm!.badgeNo ?? null, Validators.required],
      agencyController: [this.userForm!.agency ?? null, Validators.required],
      regionController: [this.userForm!.region ?? null, Validators.required],
      isNotiController: [this.userForm!.isNoti ?? null, Validators.required],
      isConfirmController: [
        this.userForm!.isConfirm ?? null,
        Validators.required,
      ],
      isSecAgencyController: [
        this.userForm!.secondAgency.isSec ?? null,
        Validators.required,
      ],
      secAgencyController: [
        this.userForm!.secondAgency.secAgency ?? null,
        Validators.required,
      ],
      secEmailController: [
        this.userForm!.secondAgency.secEmail ?? null,
        Validators.required,
      ],
      activeController: [
        this.userForm!.secondAgency.active ?? null,
        Validators.required,
      ],
      reasonForDeactivationController: [
        this.userForm!.secondAgency.reasonForDeactivation ?? null,
        Validators.required,
      ],
      readOnlyController: [
        this.userForm!.secondAgency.readOnly ?? null,
        Validators.required,
      ],
      reasonForReadOnlyController: [
        this.userForm!.secondAgency.reasonForReadOnly ?? null,
        Validators.required,
      ],
    });
  }

  // announceSortChange(sortState: Sort) {
  //   if (sortState.direction) {
  //     this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  //   } else {
  //     this._liveAnnouncer.announce('Sorting cleared');
  //   }
  // }

  onSubmit() {
    //console.log('userForm: ', this.userForm);
    //console.log(this.nS.addUser(this.userForm));
    // const dummy = new NewUser(
    //   undefined,
    //   'firstname',
    //   'surname',
    //   'email',
    //   'rank',
    //   'title',
    //   'role',
    //   true,
    //   1234,
    //   'agency',
    //   'region',
    //   false,
    //   false
    // );
    // console.log(dummy.firstname);
    // this.nS.updatedNewUser(this.userForm).subscribe(
    //   (response: NewUser) => {
    //     console.log(response);
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );

    const date = new Date();
    let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`


    const userHisotry = new UserHistory(
      currentDate,
      'Update',
      'Harry',
      '.......'
    );
    console.log('userstory: ', userHisotry);
    this.userForm.history.push(userHisotry);

    this.userForms[this.id - 1] = this.userForm;
    console.log('forms out in edit: ', this.userForms);
    this.sharedDataService.setUserForms('edit user', this.userForms);

    this.router.navigateByUrl('/paginator');
  }
}
