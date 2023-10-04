import { Component } from '@angular/core';
import { PageNameEnum } from '../../models/enums/page-name.enum';
import { SharedDataService2 } from 'src/app/util/data-service/dima/shared-data-service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css'],
})
export class PrivacyComponent {
  pageNames = PageNameEnum;

  constructor(private sharedDataService: SharedDataService2) {}

  ngOnInit(): void {
    console.log('Privacy Page Init');
    this.sharedDataService.setCurrentPage(
      'PrivacyPageComponent',
      PageNameEnum.PRIVACY
    );
  }
}
