import { AbstractControl, ValidationErrors } from '@angular/forms';

export class noSpace {
  static noSpaceValidations(control: AbstractControl): ValidationErrors | null {
    let value = control.value as string;

    console.log(value);
    if (value.indexOf(' ') >= 0) {
      return { noSPaceValidator: true };
    } else {
      return null;
    }
  }
}
