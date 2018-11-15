import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  description = 'lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum';
  url = 'https://jsonplaceholder.typicode.com/photos';
  images: any[];

  constructor(private http: HttpClient) {

  }



  ngOnInit() {
    this.http.get(this.url)
      .subscribe((response: any[]) => {
        this.images = response;
      });
  }

}
