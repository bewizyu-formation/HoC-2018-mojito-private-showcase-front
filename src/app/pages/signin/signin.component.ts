import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators, FormGroup, AbstractControl} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EnvironmentService} from '../../services/environment.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  url = 'https://geo.api.gouv.fr/communes?nom=';
  cities: any[];
  API_USERS: any = 'users';

  public username: FormControl;
  public email: FormControl;
  public password: FormControl;
  public confirmPassword: FormControl;
  public city: FormControl;
  public artistName: FormControl;
  public artistDescription;
  public userForm: FormGroup;

  /* ----------- VARIABLES D'ENVIRONNEMENT ----------- */

  /* ----------- VISIBLE FOR PASSWORD ----------- */
  hide = true;

  /* ----------- SHOW ARTIST SIGNIN ----------- */
  isArtiste = false;

  constructor(fb: FormBuilder, private http: HttpClient, private env: EnvironmentService) {

    /* ----------- IDENTIFIANT ----------- */
    this.username = fb.control('', [Validators.required]);

    /* ----------- EMAIL ----------- */
    this.email = fb.control('', [Validators.required, Validators.email]);

    /* ----------- PASSWORD ----------- */
    this.password = fb.control('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]);

    /* ----------- CONFIRM PASSWORD ----------- */
    this.confirmPassword = fb.control('', [Validators.required]);

    /* ----------- CITY ----------- */
    this.city = fb.control('', [Validators.required, Validators.minLength(2)]);

    // Création du groupe (aka le formulaire)
    this.userForm = fb.group({
      username: this.username,
      email: this.email,
      passwords: fb.group({
          password: this.password,
          confirmPassword: this.confirmPassword
        },
        {
          validator: [
            this.matchingPasswords,
          ]
        }
      ),
      city: this.city,
      artistName: this.artistName,
      artistDescription: this.artistDescription
    });
  }

  /* ----------- CHECKBOX ARTIST ----------- */
  artistShow() {
    this.isArtiste = !this.isArtiste;
  }

  /* ----------- ERROR MESSAGE ID ----------- */
  getErrorMessageId() {
    if (this.username.hasError('required')) {
      return 'L\'identifiant est requis';
    }
  }

  /* ----------- ERROR MESSAGE EMAIL ----------- */
  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'L\'email est requis';
    }
    if (this.email.hasError('email')) {
      return 'L\'email est invalide';
    }
  }

  /* ----------- ERROR MESSAGE PASSWORD ----------- */
  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'Le mot de passe est requis';
    }
    if (this.password.hasError('minlength')) {
      return 'Le mot de passe doit comporter 8 caractères minimum,';
    }
    if (this.password.hasError('pattern')) {
      return 'Le mot de passe doit comporter au moins une majuscule, une minuscule et un chiffre';
    }
  }

  /* ----------- MATCHING PASSWORD ----------- */
  private matchingPasswords(control: AbstractControl) {
    const password = control.get('password');
    const confirm = control.get('confirmPassword');

    if (!password || !confirm) {
      return null;
    }

    if (password.invalid) {
      return {invalidPassword: true};
    }

    return password.value === confirm.value ? null : {nomatch: true};
  }

  /* ----------- ERROR MESSAGE CITY ----------- */
  getErrorMessageCity() {
    if (this.city.hasError('required')) {
      return 'Le nom de la ville est requis';
    }
  }

  /* ----------- SUBMIT FORM ----------- */
  handleSubmit() {

    const city = this.cities.find(item => item.nom === this.userForm.value.city);

    const user = {
      username : this.userForm.value.username,    // TODO : rename id by username
      password : this.userForm.value.passwords.password,
      email : this.userForm.value.email,
      ville : city.nom,
      codeVille : city.code,
      codeDepartement: city.codeDepartement,
    };

    if (this.isArtiste) {
      user['artiste'] = {
        artisteNom : this.userForm.value.artistName,
        descriptionCourte : this.userForm.value.artistDescription,
      };
    }

    console.log('TO SEND ', user);

    this.createUser(user);
  }

  /* ----------- SUBMIT FORM API USER ----------- */
  createUser(user) {

    return this.http.post(`${this.env.getPrivateShowcaseApiConfig()}${this.API_USERS}`, user)
      .subscribe(
        data => {
          console.log('POST Request is successful', data);
        },
        error => {
          console.log('Error', error);
        }
      );
  }

  /* ----------- GOOGLE API CITY NAME ----------- */
  private cityNameApi(datas) {
    return this.http.get(datas);
  }

  /* ----------- AUTO COMPLETE  ----------- */
  private cityName(): any {
    this.city.valueChanges.subscribe(
      (value) => {
        this.cityNameApi(`${this.url}${value}`)
          .subscribe((data: any[]) => {
            this.cities = data;
        });
      },
    );
  }

  ngOnInit() {
    this.cityName();
  }
}
