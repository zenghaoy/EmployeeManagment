import { Component, OnInit } from '@angular/core';
import { PageNameEnum } from '../../models/enums/page-name.enum';
import { SharedDataService2 } from 'src/app/util/data-service/dima/shared-data-service';

@Component({
  selector: 'app-review-submit',
  templateUrl: './review-submit.component.html',
  styleUrls: ['./review-submit.component.css'],
})
export class ReviewSubmitComponent implements OnInit {
  pageNames = PageNameEnum;

  constructor(private sharedDataService: SharedDataService2) {}

  ngOnInit(): void {
    console.log('Review Page Init');
    this.sharedDataService.setCurrentPage(
      'ReviewPageComponent',
      PageNameEnum.REVIEW_AND_SUMBIT
    );
  }
}
