import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationPanelComponent } from './validation-panel.component';

describe('ValidationPanelComponent', () => {
  let component: ValidationPanelComponent;
  let fixture: ComponentFixture<ValidationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
