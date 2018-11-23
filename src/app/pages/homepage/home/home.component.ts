import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ArtistService } from '../../../services/artist/artist.service';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  description = 'lorem ipsum lorem ipsum ';
  url = '/artistes/{artisteId}';
  artists: any[];
  covers: any[];

  constructor(private http: HttpClient,
              private serviceArtist: ArtistService,
              private serviceUser: UserService,
              private router: Router
  ) {
  }

  ngOnInit() {
    // ON RECUPERE DES IMAGES
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .subscribe( (res: any) => {
        this.covers = res;
      });

    // ON RECUPERE TOUS LES ARTISTES LIES L'UTILISATEUR CONNECTE
    this.serviceArtist.getAll()
      .subscribe((response: any[]) => {
          this.artists = response;
          console.log(response);
        if (!response.length) {
          alert('Il n\'y a pas artiste dans votre departement');
        }
      }, (error: Response) => {
        if (error.status === 404) {
          alert('L\'artiste demandé n\'hexiste pas dans notre base de donnée.');
        } else {
          alert('Une erreur inattendue s\'est produite.');
        }
      });
}

  // AU CLIC SUR LE BOUTON 'VOIR'
  getArtist(artist): void {
    this.serviceArtist.getArtist(artist); // On récupère les infos de notre artiste.
    this.router.navigate(['/artist-page', artist.id]); // Et on navigue vers notre page artist/id
  }

}
