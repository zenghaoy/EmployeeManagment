import { Component } from '@angular/core';
import { SimpleServiceService } from './services/simple-service.service';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, NgForm, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { noSpace } from './validators/noSpace.validator';
import { Employee } from './models/employee';
import { EmployeesService } from './services/employees.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myngapp01';
  firstN: string;
  lastN: string;
  //emailtest = new FormControl('');

  constructor(public service: SimpleServiceService) {}
  //updateEmail(){
  //  this.emailtest.setValue('test@domain.com');
  //}

  userprofileForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      noSpace.noSpaceValidations,
    ]),
    lastName: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),

    contact: new FormGroup({
      address: new FormControl('', Validators.required),
      shipping: new FormControl(),
      number: new FormControl(),
    }),
    skills: new FormArray([]),
  });

  get Skills() {
    return this.userprofileForm.get('skills') as FormArray;
  }

  onSubmit() {
    console.warn(this.userprofileForm);
  }

  onSubmitNgForm(f: NgForm) {
    console.log(f);
  }

  getValue(f: FormControl) {
    console.log(f);
  }

  addSkills(skills: HTMLInputElement) {
    (this.userprofileForm.get('skills') as FormArray).push(
      new FormControl(skills.value)
    );
    skills.value = '';
  }

  remove(index) {
    this.Skills.removeAt(index);
  }
}
