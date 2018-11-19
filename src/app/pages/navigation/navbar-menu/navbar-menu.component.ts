import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})

export class NavbarMenuComponent implements OnInit {
  isWelcome: boolean;
  isSigin: boolean;
  isLogin: boolean;
  isHome: boolean;
  isArtistPage: boolean;
  isPageEvents: boolean;
  isPageCreateEvent: boolean;
  isArtistProfil: boolean;

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
      this.isHome = (this.currentUrl === '/home' ? true : false);
      this.isArtistPage = (this.currentUrl === '/artist-page' ? true : false);
      this.isArtistProfil = (this.currentUrl === '/artist-profil' ? true : false);
      this.isPageCreateEvent = (this.currentUrl === '/event-create' ? true : false);
      this.isPageEvents = (this.currentUrl === '/events' ? true : false);
    });
  }

  goBack() {
    this.location.back();
  }

}
