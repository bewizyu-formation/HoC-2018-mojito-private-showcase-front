import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLoginSigninComponent } from './menu-login-signin.component';

describe('MenuLoginSigninComponent', () => {
  let component: MenuLoginSigninComponent;
  let fixture: ComponentFixture<MenuLoginSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLoginSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLoginSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
