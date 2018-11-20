import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-hamburger',
  templateUrl: './menu-hamburger.component.html',
  styleUrls: ['./menu-hamburger.component.css']
})
export class MenuHamburgerComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToEvents() {
    this.router.navigate(['events']);
  }

  navigateToHome() {
    this.router.navigate(['home']);
  }

  navigateToContacts() {
    this.router.navigate(['contact']);
  }
  ngOnInit() {
  }

}
