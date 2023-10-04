export class UserHistory {
  recordDate: string;
  action: string;
  modified_by: string;
  modfied_values: string;

  constructor(
    recordDate: string,
    action: string,
    modified_by: string,
    modfied_values: string
  ) {
    this.recordDate = recordDate;
    this.action = action;
    this.modified_by = modified_by;
    this.modfied_values = modfied_values;
  }
}
