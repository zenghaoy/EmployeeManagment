import { Injectable } from '@angular/core';
import { PageNameEnum } from 'src/app/models/enums/page-name.enum';
import { NewUser } from 'src/app/models/new-user.model';
import { RequestFormModel } from 'src/app/models/request-form.model';

@Injectable()
export class SharedDataService {
  user1 = new NewUser(
    1,
    'Harry',
    'surname',
    'email',
    'rank',
    'title',
    'role',
    true,
    1234,
    'agency',
    'region',
    false,
    false,
    undefined,
    undefined
  );

  user2 = new NewUser(
    2,
    'Tom',
    'surname',
    'email',
    'rank',
    'title',
    'role',
    true,
    1234,
    'agency',
    'region',
    false,
    false,
    undefined,
    undefined
  );

  user3 = new NewUser(
    3,
    'Sam',
    'surname',
    'email',
    'rank',
    'title',
    'role',
    true,
    1234,
    'agency',
    'region',
    false,
    false,
    undefined,
    undefined
  );

  user4 = new NewUser(
    4,
    'Jack',
    'surname',
    'email',
    'rank',
    'title',
    'role',
    true,
    1234,
    'agency',
    'region',
    false,
    false,
    undefined,
    undefined
  );

  user5 = new NewUser(
    5,
    'Skyler',
    'surname',
    'email',
    'rank',
    'title',
    'role',
    true,
    1234,
    'agency',
    'region',
    false,
    false,
    undefined
  );

  user6 = new NewUser(
    6,
    'Alice',
    'surname',
    'email',
    'rank',
    'title',
    'role',
    true,
    1234,
    'agency',
    'region',
    false,
    false,
    undefined,
    undefined
  );

  private userForms = [
    this.user1,
    this.user2,
    this.user3,
    this.user4,
    this.user5,
    this.user6,
  ];

  // constructor() {
  //   this.userForms?.push(this.user1, this.user2, this.user3, this.user4);
  // }

  public getUserForms(loc: string): NewUser[] | undefined {
    return this.userForms;
  }

  public setUserForms(loc: string, userForms: NewUser[] | undefined): void {
    this.userForms = userForms;
  }
}
