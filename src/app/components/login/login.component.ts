import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public users: User[];

  constructor(
    public formBuilder: FormBuilder,
    public uS: UserService,
    public router: Router
  ) {
    // this.uS.getUsers().subscribe(
    //   (response: User[]) => {
    //     console.log('========', response);
    //     this.users = response;
    //     //console.log(this.users);
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );
  }

  userInfo = new User('Harry', '1234');

  submitForm = this.formBuilder.group({
    username: ['Harry', Validators.required],
    password: ['1234', Validators.required],
  });

  submitFormAction() {
    // this.userInfo.username = this.submitForm.value.username;
    // this.userInfo.password = this.submitForm.value.password;
    // console.log(this.userInfo);
    // console.log(this.submitForm);

    // console.log(this.users);

    // this.users.forEach((user, i) => {
    //   console.log(user);
    //   console.log(this.userInfo);

    //   if (
    //     this.userInfo.username === user.username &&
    //     this.userInfo.password === user.password
    //   ) {
    //     console.log('login succes');
    this.router.navigateByUrl('/inquiry');
    //   }
    // });

    //this.router.navigateByUrl('');

    // if(this.users[key]=value){
    //   this.rou
    // }

    // let url = 'http://localhost:8000';
  }
}
