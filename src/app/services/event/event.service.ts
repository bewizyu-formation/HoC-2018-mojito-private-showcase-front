import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private url1 = 'https://jsonplaceholder.typicode.com/users';
  private url2 = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }


}
