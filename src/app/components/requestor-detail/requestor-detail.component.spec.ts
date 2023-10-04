import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestorDetailComponent } from './requestor-detail.component';

describe('RequestorDetailComponent', () => {
  let component: RequestorDetailComponent;
  let fixture: ComponentFixture<RequestorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestorDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
