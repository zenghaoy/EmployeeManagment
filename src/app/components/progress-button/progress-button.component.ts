import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageNameEnum } from '../../models/enums/page-name.enum';
import { Router } from '@angular/router';
import { SharedDataService2 } from 'src/app/util/data-service/dima/shared-data-service';
import { RequestFormModel } from 'src/app/models/request-form.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-progress-button',
  templateUrl: './progress-button.component.html',
  styleUrls: ['./progress-button.component.css'],
})
export class ProgressButtonComponent {
  @Input() public page: string | undefined;
  @Input() public formGroup: FormGroup | undefined;
  @Input() public requestForm: RequestFormModel | undefined;
  @Output() public nextClicked: EventEmitter<boolean> =
    new EventEmitter<boolean>(false);

  pageNames = PageNameEnum;
  // currentPage: PageNameEnum;

  constructor(
    private router: Router,
    private shareDataService: SharedDataService2
  ) {
    // this.currentPage = this.shareDataService.getCurrentPage('ProgressButton');
    // console.log('constrructor Progrees button', this.currentPage);
  }

  navigateToPreviousPage() {
    switch (this.page) {
      case this.pageNames.HOME:
        this.router.navigateByUrl('/home-page');
        break;
      case this.pageNames.DATA_REQUEST:
        this.router.navigateByUrl('/home-page');
        break;
      case this.pageNames.CLIENT_AND_REQUESTOR:
        this.router.navigateByUrl('/data-request');
        break;
      case this.pageNames.PRIVACY:
        this.router.navigateByUrl('/requestor-detail');
        break;
      case this.pageNames.REVIEW_AND_SUMBIT:
        this.router.navigateByUrl('/privacy-page');
        break;
      default:
        this.router.navigateByUrl('/');
        break;
    }
  }

  navigateToNextPage() {
    console.log(this.formGroup?.controls);
    console.log(this.formGroup?.get('combinedAttr'));

    this.nextClicked.emit(true);

    console.log(this.requestForm);
    if (this.formGroup != null && this.formGroup!.invalid) {
      return;
    }

    switch (this.page) {
      case this.pageNames.HOME:
        this.shareDataService.setRequestForm(
          'nav-home',
          new RequestFormModel()
        );
        this.router.navigateByUrl('/data-request');
        break;
      case this.pageNames.DATA_REQUEST:
        this.router.navigateByUrl('/requestor-detail');
        break;
      case this.pageNames.CLIENT_AND_REQUESTOR:
        this.router.navigateByUrl('/privacy-page');
        break;
      case this.pageNames.PRIVACY:
        this.router.navigateByUrl('/review-submit');
        break;
      case this.pageNames.REVIEW_AND_SUMBIT:
        this.router.navigateByUrl('/submitted-page');
        break;
    }
  }
}
