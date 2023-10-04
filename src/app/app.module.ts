import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Myc01Component } from './myc01/myc01.component';
import { Myc02Component } from './myc02/myc02.component';
import { TodolistComponent } from './todolist/todolist.component';
import { SexPipeline } from './piplines/sex.pipeline';
import { ZzmmPipe } from './piplines/zzmm.pipe';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { SimpleServiceService } from './services/simple-service.service';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataRequestComponent } from './components/data-request/data-request.component';
import { RequestorDetailComponent } from './components/requestor-detail/requestor-detail.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ReviewSubmitComponent } from './components/review-submit/review-submit.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ProgressButtonComponent } from './components/progress-button/progress-button.component';
import { SubmittedPageComponent } from './components/submitted-page/submitted-page.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SharedDataService2 } from './util/data-service/dima/shared-data-service';
import { SharedDataService } from './util/data-service/user/shared-data-service';
import { ValidationPanelComponent } from './components/validation-panel/validation-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorComponent } from './component2/paginator/paginator.component';
import { ButtonComponent } from './component2/button/button.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { SubheaderComponent } from './component2/subheader/subheader.component';
import { NewUserComponent } from './component2/new-user/new-user.component';
import { EditUserComponent } from './component2/edit-user/edit-user.component';
import { Header2Component } from './component2/header2/header2.component';
import { InquiryComponent } from './component2/inquiry/inquiry.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Myc01Component,
    Myc02Component,
    TodolistComponent,
    SexPipeline,
    ZzmmPipe,
    ChildComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    EmployeesComponent,
    HeaderComponent,
    BreadCrumbComponent,
    HomePageComponent,
    FooterComponent,
    DataRequestComponent,
    RequestorDetailComponent,
    PrivacyComponent,
    ReviewSubmitComponent,
    ProgressBarComponent,
    ProgressButtonComponent,
    SubmittedPageComponent,
    LoginComponent,
    LogoutComponent,
    ValidationPanelComponent,
    PaginatorComponent,
    ButtonComponent,
    SubheaderComponent,
    NewUserComponent,
    EditUserComponent,
    Header2Component,
    InquiryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    ReactiveFormsModule,
    RouterModule.forRoot([
      // {
      //path: '',
      //children: [
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'home-page', component: HomePageComponent },
      { path: 'data-request', component: DataRequestComponent },
      { path: 'requestor-detail', component: RequestorDetailComponent },
      { path: 'privacy-page', component: PrivacyComponent },
      { path: 'review-submit', component: ReviewSubmitComponent },
      { path: 'submitted-page', component: SubmittedPageComponent },
      { path: 'paginator', component: PaginatorComponent },
      { path: 'add-user', component: NewUserComponent },
      { path: 'edit-user/:id', component: EditUserComponent },
      { path: 'inquiry', component: InquiryComponent },

      //],
      // },
      //{ path: '', component: HomePageComponent, pathMatch: 'full' },
      // { path: 'post/:id', component: ChildComponent },
      // { path: 'child2', component: Child2Component },
    ]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [SimpleServiceService, SharedDataService, SharedDataService2],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
