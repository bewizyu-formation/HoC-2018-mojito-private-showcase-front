import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {NavigationEnd, Router} from '@angular/router';
import _ from 'lodash';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})

export class NavbarMenuComponent implements OnInit {
  // @input() user;

  isWelcome: boolean;
  isSigin: boolean;
  isLogin: boolean;
  isHome: boolean;
  isUserProfil: boolean;
  isArtistPage: boolean;
  isPageCreateEvent: boolean;
  isPageEvents: boolean;
  isPageContact: boolean;

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
      this.isHome = (_.startsWith(this.currentUrl, '/home/') ? true : false); // ATTENTION SI BUG FAIRE 'npm install'
      this.isUserProfil = (_.startsWith(this.currentUrl, '/user-profil/') ? true : false);
      this.isArtistPage = (_.startsWith(this.currentUrl, '/artist-page/') ? true : false);
      this.isPageCreateEvent = (_.startsWith(this.currentUrl, '/event-create/') ? true : false);
      this.isPageEvents = (this.currentUrl === '/events' ? true : false);
      this.isPageContact = (this.currentUrl === '/contact' ? true : false);
    });
  }

  goBack() {
    this.location.back();
  }
}
