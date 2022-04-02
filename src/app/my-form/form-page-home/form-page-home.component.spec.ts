import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPageHomeComponent } from './form-page-home.component';

describe('FormPageHomeComponent', () => {
  let component: FormPageHomeComponent;
  let fixture: ComponentFixture<FormPageHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPageHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
