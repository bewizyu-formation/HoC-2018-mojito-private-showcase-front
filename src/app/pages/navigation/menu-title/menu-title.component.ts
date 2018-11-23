import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';
import _ from 'lodash';
@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent implements OnInit {
  isWelcome: boolean;
  isSigin: boolean;
  isLogin: boolean;
  isHome: boolean;
  isPageEvents: boolean;
  isArtistPage: boolean;
  isPageCreateEvent: boolean;
  isUserProfile: boolean;

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
      this.isHome = (_.startsWith(this.currentUrl, '/home') ? true : false); // ATTENTION SI BUG FAIRE 'npm install'
      this.isArtistPage = (_.startsWith(this.currentUrl, '/artist-page/') ? true : false);
      this.isUserProfile = (_.startsWith(this.currentUrl, '/user-profil/') ? true : false);
      this.isPageCreateEvent = (_.startsWith(this.currentUrl, '/event-create/') ? true : false);
      this.isPageEvents = (this.currentUrl === '/events' ? true : false);
    });
  }
}
