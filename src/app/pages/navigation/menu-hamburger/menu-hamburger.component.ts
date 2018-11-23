import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-hamburger',
  templateUrl: './menu-hamburger.component.html',
  styleUrls: ['./menu-hamburger.component.css']
})
export class MenuHamburgerComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }

  navigateToEvents() {
    return this.router.navigate(['events']);
  }

  navigateToHome() {
    return this.router.navigate(['home']); // TODO : changer 'this.user' en 'user.id'
  }

  navigateToContacts() {
    return this.router.navigate(['contact']);
  }

}
