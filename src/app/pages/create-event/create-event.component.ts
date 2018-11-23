import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  url = 'https://jsonplaceholder.typicode.com/photos';
  users: any[];

  myUrl = 'https://jsonplaceholder.typicode.com/posts';
  posts: any[];

  intUrl = 'https://jsonplaceholder.typicode.com/users';
  streets: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url)
      .subscribe((res: any[]) => {
        this.users = res;
      });

    this.http.get(this.myUrl)
      .subscribe((res: any[]) => {
        this.posts = res;
      });

    this.http.get(this.intUrl)
      .subscribe((res: any[]) => {
        this.streets = res;
      });
  }
}
