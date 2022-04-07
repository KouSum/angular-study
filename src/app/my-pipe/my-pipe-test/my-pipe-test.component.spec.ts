import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPipeTestComponent } from './my-pipe-test.component';

describe('MyPipeTestComponent', () => {
  let component: MyPipeTestComponent;
  let fixture: ComponentFixture<MyPipeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPipeTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPipeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
