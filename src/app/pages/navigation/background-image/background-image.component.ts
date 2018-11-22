import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.css']
})
export class BackgroundImageComponent implements OnInit {
  isWelcome: boolean;
  isSigin: boolean;
  isLogin: boolean;

  title = 'Private ShowCase';
  currentUrl: string;

  constructor(
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.currentUrl = e.url;
        console.log(this.currentUrl);
      }
      this.isWelcome = (this.currentUrl === '/' ? true : false);
      this.isSigin = (this.currentUrl === '/sigin' ? true : false);
      this.isLogin = (this.currentUrl === '/login' ? true : false);
    });
  }
}
