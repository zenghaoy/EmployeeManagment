import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validation-panel',
  templateUrl: './validation-panel.component.html',
  styleUrls: ['./validation-panel.component.css'],
})
export class ValidationPanelComponent {
  @Input() formGroup: FormGroup | undefined;
  @Input() msgOrder: string[] | undefined;

  formErrors() {
    const invalid = [];
    const controls = this.formGroup!.controls;

    for (const name in controls) {
      if (controls[name].errors) {
        invalid.push([name, this.prettier(name)]);
      }
    }

    console.log(invalid);

    return invalid;
  }

  prettier(key: string) {
    switch (key) {
      case 'combinedAttr':
        return 'Q1 missing';
      case 'freqOfReqList':
        return 'Q2 missing';
      case 'Q2Other':
        return 'Q2 other missing';
      case 'FreqOneTime':
        return 'Q3 missing';
      case 'Q3Test':
        return 'Q3 Yes missing';
      case 'Q4':
        return 'Q4 missing';
      case 'Q5':
        return 'Q5 missing';
      case 'Q5Other':
        return 'Q5 other mising';
      default:
        return 'NO found error';
    }
  }

  scrollToError(key: string) {
    switch (key) {
      case 'combinedAttr':
        document
          .querySelector('[formControlName="combinedAttr"]')
          ?.scrollIntoView();
        return;
      case 'freqOfReqList':
        document
          .querySelector('[formControlName="freqOfReqList"]')
          ?.scrollIntoView();
        return;
      case 'Q2Other':
        document.querySelector('[formControlName="Q2Other"]')?.scrollIntoView();
        return;
      case 'FreqOneTime':
        document
          .querySelector('[formControlName="FreqOneTime"]')
          ?.scrollIntoView();
        return;
      case 'Q4':
        document.querySelector('[formControlName="Q4"]')?.scrollIntoView();
        return;
      case 'Q5':
        document.querySelector('[formControlName="Q5"]')?.scrollIntoView();
        return;
      case 'Q5Other':
        document.querySelector('[formControlName="Q5Other"]')?.scrollIntoView();
        return;
      case 'Q3Test':
        document.querySelector('[formControlName="Q3Test"]')?.scrollIntoView();
        return;
    }
  }
}
