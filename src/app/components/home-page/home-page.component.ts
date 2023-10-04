import { Component, OnInit } from '@angular/core';
import { PageNameEnum } from '../../models/enums/page-name.enum';
import { TranslateService } from '@ngx-translate/core';
import { SharedDataService2 } from 'src/app/util/data-service/dima/shared-data-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  pageNames = PageNameEnum;

  constructor(
    private translate: TranslateService,
    private sharedDataService: SharedDataService2
  ) {
    console.log('constructor homepage');
  }

  ngOnInit(): void {
    console.log('Home Page Init');
    this.sharedDataService.setCurrentPage(
      'HomePageComponent',
      PageNameEnum.HOME
    );
  }
}
