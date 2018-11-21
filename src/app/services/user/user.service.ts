import {Injectable} from '@angular/core';
import {UserRepository} from './user.repository';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // url: string = 'http'

  /**
   * Authentification JWT Token
   */
  public token: string;

  constructor(
    private userRepository: UserRepository,
    private http: HttpClient) {
  }

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
          console.log('Response Token : ', this.token);
          resolve(this.token);
        });
    });
  }


  /*get(username: string, password: string) {
    this.http.get()
  }*/
}
