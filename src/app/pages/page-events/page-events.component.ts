import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-page-events',
  templateUrl: './page-events.component.html',
  styleUrls: ['./page-events.component.css']
})
export class PageEventsComponent implements OnInit {

  url = 'https://jsonplaceholder.typicode.com/users';
  users: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url)
      .subscribe((response: any []) => {
        this.users = response;
      });
  }
}
