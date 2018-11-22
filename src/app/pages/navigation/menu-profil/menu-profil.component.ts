import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-profil',
  templateUrl: './menu-profil.component.html',
  styleUrls: ['./menu-profil.component.css']
})
export class MenuProfilComponent implements OnInit {
  user = 1;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToArtisteProfil() {
    return this.router.navigate(['/artist-page', this.user]); // TODO : changer 'this.user' en 'user.id'
  }

  navigateToUserProfil() {
    return this.router.navigate(['user-profil', this.user]); // TODO : changer 'this.user' en 'user.id'
  }

  navigateToDisconnect() {
    return this.router.navigate(['']);
  }
}
