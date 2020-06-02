import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAndActivationComponent } from './signup-and-activation.component';

describe('SignupAndActivationComponent', () => {
  let component: SignupAndActivationComponent;
  let fixture: ComponentFixture<SignupAndActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAndActivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAndActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
