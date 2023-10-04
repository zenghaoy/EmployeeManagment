import { Injectable } from '@angular/core';
import { PageNameEnum } from 'src/app/models/enums/page-name.enum';
import { RequestFormModel } from 'src/app/models/request-form.model';

@Injectable()
export class SharedDataService2 {
  private currentPage: PageNameEnum = PageNameEnum.HOME;
  private requestForm?: RequestFormModel;

  public getRequestForm(loc: string): RequestFormModel | undefined {

    
    return this.requestForm;
  }

  public setRequestForm(
    loc: string,
    requestForm: RequestFormModel | undefined
  ): void {
    this.requestForm = requestForm;
  }

  public getCurrentPage(loc: string): PageNameEnum {
    console.log(this.currentPage);
    return this.currentPage;
  }

  public setCurrentPage(loc: string, page: PageNameEnum) {
    this.currentPage = page;
  }
}
