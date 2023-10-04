import { Component, OnInit } from '@angular/core';
import { PageNameEnum } from '../../models/enums/page-name.enum';
import { SharedDataService2 } from 'src/app/util/data-service/dima/shared-data-service';
import { Router } from '@angular/router';
import { RequestFormModel } from 'src/app/models/request-form.model';
import { DataRequestModel } from 'src/app/models/data-request.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataFrequencyEnum } from 'src/app/models/enums/data-frequency.enum';
import { noSpace } from 'src/app/validators/noSpace.validator';

@Component({
  selector: 'app-data-request',
  templateUrl: './data-request.component.html',
  styleUrls: ['./data-request.component.css'],
})
export class DataRequestComponent implements OnInit {
  pageNames = PageNameEnum;
  requestForm: RequestFormModel = new RequestFormModel();
  formGroup: FormGroup | undefined;
  dataRequestFreq = DataFrequencyEnum;
  nextClicked: boolean = false;

  readonly REASON_ORDER: string[] = [
    'Bussiness',
    'Government',
    'Legislation',
    'Policy',
    'Research',
    'Other',
  ];

  static readonly ERROR_ORDER: string[] = [
    'Q1 missing',
    'Q2 missing',
    'Q2 other missing',
    'Q3 missing',
    'Q3 Yes missing',
    'Q4 missing',
    'Q5 missing',
    'Q5 other mising',
  ];

  constructor(
    private sharedDataService: SharedDataService2,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    console.log('Request Page Init');
    this.sharedDataService.setCurrentPage(
      'RequestPageComponent',
      PageNameEnum.DATA_REQUEST
    );

    let savedRequestForm =
      this.sharedDataService.getRequestForm('data request ONnit');
    console.log(savedRequestForm);
    if (savedRequestForm != null) {
      this.requestForm = savedRequestForm;
      if (this.requestForm != null && this.requestForm.dataRequest == null) {
        this.requestForm.dataRequest = new DataRequestModel();
      }
    } else {
      this.router.navigateByUrl('/');
    }

    this.buildFormValidation();

    this.requestForm.dataRequest!.isTheDateValid = true;
  }

  nextClickedFunction(event: boolean) {
    this.nextClicked = event;
  }

  private buildFormValidation() {
    this.formGroup = this.formBuilder.group({
      combinedAttr: [
        this.requestForm.dataRequest!.additionalDataAttr ?? null,
        Validators.required,
        noSpace.noSpaceValidations,
      ],
      freqOfReqList: [
        this.requestForm.dataRequest!.freqOfKey ?? null,
        Validators.required,
      ],
      Q2Other: [this.requestForm.dataRequest!.freqOfRequestorOther ?? null],
      FreqOneTime: [
        this.requestForm.dataRequest!.isCutomSnapShot ?? null,
        Validators.required,
      ],
      Q4: [
        this.requestForm.dataRequest!.dataRequiredByDate ?? null,
        Validators.required,
      ],
      Q5: [
        this.requestForm.dataRequest!.reasonDetailsKay ?? null,
        Validators.required,
      ],
    });
  }

  addControlQ3Yes() {
    this.formGroup.addControl(
      'Q3Test',
      this.formBuilder.control(
        this.requestForm.dataRequest!.prevRequestNumber,
        [Validators.required]
      )
    );
  }

  removeControlQ3Yes() {
    this.requestForm.dataRequest!.prevRequestNumber = undefined;
    this.formGroup.removeControl('Q3Test');
  }

  addControlQ2Other() {
    this.formGroup.addControl(
      'Q2Other',
      this.formBuilder.control(
        this.requestForm.dataRequest!.freqOfRequestorOther,
        [Validators.required]
      )
    );
  }

  removeControlQ2Other() {
    if (this.requestForm.dataRequest!.freqOfRequestorOther) {
      this.requestForm.dataRequest!.freqOfRequestorOther = undefined;
    }
    if (this.formGroup.contains('Q2Other')) {
      this.formGroup.removeControl('Q2Other');
    }
  }

  // userNamengmodelchange(event: any) {
  //   console.log(event.target.value);
  // }

  updateReason(event: any) {
    const data = event?.target;
    const vals = this.requestForm.dataRequest.reasonDetailsKay ?? [];

    console.log(data.checked);

    if (data.checked) {
      console.log(data.value);
      vals.push(data.value);
    } else {
      vals.splice(vals.indexOf(data.value), 1);
    }
    console.log(vals);
    this.requestForm.dataRequest.reasonDetailsKay = vals;
    this.formGroup.patchValue({ Q5: vals });
  }

  addControlQ5Other() {
    this.formGroup.addControl(
      'Q5Other',
      this.formBuilder.control(
        this.requestForm.dataRequest!.reasonDetailsOther,
        [Validators.required]
      )
    );
  }

  removeControlQ5Other() {
    if (this.requestForm.dataRequest!.reasonDetailsOther) {
      this.requestForm.dataRequest!.reasonDetailsOther = undefined;
    }
    if (this.formGroup.contains('Q5Other')) {
      this.formGroup.removeControl('Q5Other');
    }
  }

  getErrorOrder(): string[] {
    return DataRequestComponent.ERROR_ORDER;
  }
}
