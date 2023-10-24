import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from 'src/app/models/new-user.model';
import { UserHistory } from 'src/app/models/user-history.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { NewUserServiceService } from 'src/app/services/new-user-service.service';
import { SharedDataService } from 'src/app/util/data-service/user/shared-data-service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent {
  userForm: NewUser = new NewUser();
  userForms: NewUser[];

  formGroup: FormGroup | undefined;

  constructor(
    private sharedDataService: SharedDataService,
    private nS: NewUserServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForms = this.sharedDataService.getUserForms('new user');

    this.buildFormValidation();
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
    });
  }

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
    // this.nS.addUser(this.userForm).subscribe(
    //   (response: NewUser) => {
    //     console.log(response);
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );

    if (this.userForm?.history == null) {
      console.log('history is null');
      this.userForm.history = [];
    }

    const date = new Date();
    let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`

    const userHisotry = new UserHistory(currentDate, 'Create', 'Harry', '');
    this.userForm.history.push(userHisotry);

    this.userForm.id = this.userForms.length + 1;

    console.log('form out in add: ', this.userForm);

    this.userForms.push(this.userForm);

    this.sharedDataService.setUserForms('new user', this.userForms);

    this.router.navigateByUrl('/paginator');
  }
}
