import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ArtistService } from '../../../services/artist/artist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  description = 'lorem ipsum lorem ipsum ';
  url = '/artistes/{artisteId}';
  artists: any[];

  constructor(private http: HttpClient,
              private service: ArtistService,
              private router: Router
  ) {
  }

  ngOnInit() {
    // GET ALL ARTISTS ON INIT FROM ARTIST SERVICES
    this.service.getAll()
      .subscribe((response: any[]) => {
        this.artists = response;
      }, (error: Response) => {
        if (error.status === 404) {
          alert('L\'artiste demandé n\'hexiste pas dans notre base de donnée.');
        } else {
          alert('Une erreur inattendue s\'est produite.');
        }

      });
}

  getArtist(artist): void {
    // On récupère les infos de notre artiste.
    this.service.getArtist(artist);
    // Il faut les passer en params de notre prochaine route.
    // A faire ici //
    // Puis on navigue vers notre page artist/id
    this.router.navigate(['/artist-page', artist.title, artist.id]); // Puis
  }
}
