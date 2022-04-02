import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPropsTestComponent } from './my-props-test.component';

describe('MyPropsTestComponent', () => {
  let component: MyPropsTestComponent;
  let fixture: ComponentFixture<MyPropsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPropsTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPropsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
