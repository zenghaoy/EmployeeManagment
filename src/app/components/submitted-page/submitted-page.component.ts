import { Component, OnInit } from '@angular/core';
import { PageNameEnum } from 'src/app/models/enums/page-name.enum';
import { SharedDataService2 } from 'src/app/util/data-service/dima/shared-data-service';

@Component({
  selector: 'app-submitted-page',
  templateUrl: './submitted-page.component.html',
  styleUrls: ['./submitted-page.component.css'],
})
export class SubmittedPageComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService2) {}

  ngOnInit(): void {
    console.log('Submit Page Init');
    this.sharedDataService.setCurrentPage(
      'RequestorPageComponent',
      PageNameEnum.SUBMITTED
    );
  }
}
