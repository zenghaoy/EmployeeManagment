import { Component, OnInit } from '@angular/core';
import { PageNameEnum } from '../../models/enums/page-name.enum';
import { SharedDataService2 } from 'src/app/util/data-service/dima/shared-data-service';
import { RequestFormModel } from 'src/app/models/request-form.model';
import { RequestorDetailModel } from 'src/app/models/requestor-detail.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-requestor-detail',
  templateUrl: './requestor-detail.component.html',
  styleUrls: ['./requestor-detail.component.css'],
})
export class RequestorDetailComponent implements OnInit {
  pageNames = PageNameEnum;
  requestForm: RequestFormModel = new RequestFormModel();

  constructor(
    private sharedDataService: SharedDataService2,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('Requestor Page Init');
    this.sharedDataService.setCurrentPage(
      'RequestorPageComponent',
      PageNameEnum.CLIENT_AND_REQUESTOR
    );

    let savedRequestForm = this.sharedDataService.getRequestForm(
      'data requestor ONnit'
    );
    console.log(savedRequestForm);
    if (savedRequestForm != null) {
      this.requestForm = savedRequestForm;
      if (
        this.requestForm != null &&
        this.requestForm.requestorDetails == null
      ) {
        this.requestForm.requestorDetails = new RequestorDetailModel();
      }
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
