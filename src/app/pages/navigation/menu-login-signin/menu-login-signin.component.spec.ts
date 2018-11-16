import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLoginSigninComponent } from './menu-login-signin.component';
import { MaterialModule } from '../../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('MenuLoginSigninComponent', () => {
  let component: MenuLoginSigninComponent;
  let fixture: ComponentFixture<MenuLoginSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLoginSigninComponent ],
      imports : [
        MaterialModule,
        ReactiveFormsModule,
        FormsModule
      ]
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
