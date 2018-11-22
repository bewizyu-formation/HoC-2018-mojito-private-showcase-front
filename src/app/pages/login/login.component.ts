import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup; // mon formulaire
  // Constantes
  public readonly passMinLength = 8;
  public readonly passMaxLength = 30;
  public readonly passRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$';

  public hidePassword = true;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usrService: UserService
    ) {
    this.form = fb.group({
      user: fb.group({
        email: ['', [
            Validators.required,
            // Validators.email
          ]
        ],
        password: ['', [
            Validators.required,
            Validators.minLength(this.passMinLength),
            Validators.maxLength(this.passMaxLength),
            Validators.pattern(this.passRegex)
          ]
        ]
      })
    });
  }

  ngOnInit() {
  }

  // A la validation du form
  login(data) { // valeurs d'inputs argument
   // tentative de connexion
    this.usrService.login(data.user.email, data.user.password)
      .then(
        () => {
            this.router.navigate(['/home']);
        }
      )
      .catch(() =>
        this.form.setErrors({
          invalidLogin: true // Afficher message d'erreur
        })
      );
  }


  // On declare un getter pour acceder plus simplement aux FormsControls cote template
  get email() {
    return this.form.get('user.email');
  }
  get password() {
    return this.form.get('user.password');
  }

}
