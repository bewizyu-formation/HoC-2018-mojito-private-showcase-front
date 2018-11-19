import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'Veuillez entrez votre email' :
      this.email.hasError('email') ? 'Email invalide' : '';
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    // if(this.username == 'admin' && this.password == 'admin'){
      this.router.navigate(['home']);
    // }else {
    //   alert("Invalid credentials");
    // }
  }
}
