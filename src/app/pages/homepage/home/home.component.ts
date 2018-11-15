import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  description = 'lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum';
  url = 'https://jsonplaceholder.typicode.com/photos';
  artists: any[];

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    // GET ALL ARTISTS ON INIT
    this.http.get(this.url)
      .subscribe((response: any[]) => {
        this.artists = response;
      });

    console.log(this.activatedRoute.snapshot['_routerState'].url);
}
}
