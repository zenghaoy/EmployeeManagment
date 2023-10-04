import { Component } from '@angular/core';
import { SharedDataService2 } from 'src/app/util/data-service/dima/shared-data-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private sharedDataService: SharedDataService2) {}

  page = this.sharedDataService.getCurrentPage('Footer');
}
