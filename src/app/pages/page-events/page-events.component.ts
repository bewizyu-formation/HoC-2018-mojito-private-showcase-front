import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-page-events',
  templateUrl: './page-events.component.html',
  styleUrls: ['./page-events.component.css']
})
export class PageEventsComponent implements OnInit {

  url = 'https://jsonplaceholder.typicode.com/users';
  urlPhotos = 'https://jsonplaceholder.typicode.com/photos';
  users: any[];
  photos: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url)
      .subscribe((response: any []) => {
        this.users = response;
      });
    this.http.get(this.urlPhotos)
      .subscribe((response: any[]) => {
        this.photos = response;
      });
  }

}
