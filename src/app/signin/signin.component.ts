import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  constructor(fb: FormBuilder) {

    // Création des contrôles
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);
    this.passwordCtrl = fb.control('');
    this.userForm = fb.group({
      email: this.emailCtrl,
      password: this.passwordCtrl
    });
  }
    handleSubmit() {
    console.log(this.userForm.value);
  }
  ngOnInit() {
  }
}
