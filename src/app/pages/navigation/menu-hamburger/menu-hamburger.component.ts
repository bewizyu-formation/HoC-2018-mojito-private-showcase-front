import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-hamburger',
  templateUrl: './menu-hamburger.component.html',
  styleUrls: ['./menu-hamburger.component.css']
})
export class MenuHamburgerComponent implements OnInit {
  user = 1;

  constructor(private router: Router) { }


  ngOnInit() {
  }

  navigateToEvents() {
    return this.router.navigate(['events']);
  }

  navigateToHome() {
    return this.router.navigate(['home', , this.user]); // TODO : changer 'this.user' en 'user.id'
  }

  navigateToContacts() {
    return this.router.navigate(['contact']);
  }

}
