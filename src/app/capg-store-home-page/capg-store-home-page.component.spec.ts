import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapgStoreHomePageComponent } from './capg-store-home-page.component';

describe('CapgStoreHomePageComponent', () => {
  let component: CapgStoreHomePageComponent;
  let fixture: ComponentFixture<CapgStoreHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapgStoreHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapgStoreHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
