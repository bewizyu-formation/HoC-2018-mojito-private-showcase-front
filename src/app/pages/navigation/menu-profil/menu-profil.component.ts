import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-profil',
  templateUrl: './menu-profil.component.html',
  styleUrls: ['./menu-profil.component.css']
})
export class MenuProfilComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToArtisteProfil() {
    return this.router.navigate(['artist-page/:artistName/:artistId']);
  }

  navigateToUserProfil() {
    return this.router.navigate(['user-profile']);
  }

  navigateToDisconnect() {
    return this.router.navigate(['disconnect']);
  }
}
