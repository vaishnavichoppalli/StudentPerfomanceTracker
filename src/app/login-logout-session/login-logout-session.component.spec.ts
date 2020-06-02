import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLogoutSessionComponent } from './login-logout-session.component';

describe('LoginLogoutSessionComponent', () => {
  let component: LoginLogoutSessionComponent;
  let fixture: ComponentFixture<LoginLogoutSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLogoutSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLogoutSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
