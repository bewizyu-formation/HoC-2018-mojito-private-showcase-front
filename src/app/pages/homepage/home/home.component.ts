import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArtistService} from '../../../services/artist/artist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  description = 'lorem ipsum lorem ipsum ';
  url = 'https://jsonplaceholder.typicode.com/photos';
  artists: any[];

  constructor(
    private service: ArtistService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    // GET ALL ARTISTS ON INIT
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

    console.log(this.activatedRoute.snapshot['_routerState'].url);
}



  getArtist(artist): void {
    // On recupere les infos de notre artiste
    this.service.getArtist(artist);
    // Il faut les passer en params de notre prochaine route
      // A faire ici //
    // Puis on navigue vers notre page artist/id
    this.router.navigate(['/artist-page', artist.title, artist.id]); // Puis
  }
}
