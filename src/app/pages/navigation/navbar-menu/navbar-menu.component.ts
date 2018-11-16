import {Component, OnChanges, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})

export class NavbarMenuComponent implements OnInit {

  title = 'Private ShowCase';
  currentUrl: string;

  constructor(
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit() {

    this.router.events.subscribe((_: NavigationEnd) => {
      this.currentUrl = _.url;
      console.log(_.url);
    });
  }

  // On retourne sur la derniere page
  goBack(): void {
    this.location.back();
  }

}
