import {Injectable} from '@angular/core';
import {UserRepository} from './user.repository';
import {HttpClient, HttpResponse} from '@angular/common/http';
const TOKEN_KEY = 'TOKEN_KEY';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://localhost:8080';



  /**
   * Authentification JWT Token
   */
  private _token: string;

  constructor(
    private userRepository: UserRepository,
    private http: HttpClient
  ) {
  }

  /* ------------------  LOGIN AVEC LE BACK ------------------*/

  /**
   * Login the user
   * @param username User login name
   * @param password User Password
   */
  login(username: string, password: string): Promise<string> {
    return new Promise ((resolve) => {
      this.userRepository
        .login(username, password)
        .subscribe((response: HttpResponse<any>) => {
          this.token = response.headers.get('Authorization');
          resolve(this.token);
          console.log('Response Token : ', this._token);
        });
    });
  }

  /* ------------------  OPERATIONS SUR LES USERS  ------------------*/

  getUser() {
    return this.http.get(this.url + '/users/authenticated');
  }

  create(user) {
    return this.http.put(this.url, JSON.stringify(user));
  }

  update(user) {
    return this.http.put(this.url + '/users/authenticated', JSON.stringify(user));
  }

  delete() {
    return this.http.delete(this.url + '/users/authenticated');
  }

  handlingErrors() {

  }

  /* ------------------  GETTERS & SETTERS  ------------------*/
  public get token(): string {
    if (this._token) {
      return this._token;
    }
    return localStorage.getItem(TOKEN_KEY);
  }

  public set token(value: string) {
    this._token = value;
    localStorage.setItem(TOKEN_KEY, this._token);
  }

  get() {
    return this.http.get(this.url)
      .subscribe(res => {

      });
  }
}
