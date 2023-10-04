import { SecondAgency } from './second-agency.model';
import { UserHistory } from './user-history.model';

export class NewUser {
  id: number;
  firstname: string;
  surname: string;
  email: string;
  rank: string;
  title: string;
  role: string;
  isBadge: boolean;
  badgeNo: number;
  agency: string;
  region: string;
  isNoti: boolean;
  isConfirm: boolean;
  secondAgency: SecondAgency;
  history: UserHistory[];

  constructor(
    id?: number,
    firstname?: string,
    surname?: string,
    email?: string,
    rank?: string,
    title?: string,
    role?: string,
    isBadge?: boolean,
    badgeNo?: number,
    agency?: string,
    region?: string,
    isNoti?: boolean,
    isConfirm?: boolean,
    secondAgency?: SecondAgency,
    history?: UserHistory[]
  ) {
    this.id = id;
    this.firstname = firstname;
    this.surname = surname;
    this.email = email;
    this.rank = rank;
    this.title = title;
    this.role = role;
    this.isBadge = isBadge;
    this.badgeNo = badgeNo;
    this.agency = agency;
    this.region = region;
    this.isNoti = isNoti;
    this.isConfirm = isConfirm;
    this.secondAgency = secondAgency;
    this.history = history;
  }
}
