import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-artist-page-presentation',
  templateUrl: './artist-page-presentation.component.html',
  styleUrls: ['./artist-page-presentation.component.css']
})
export class ArtistPagePresentationComponent implements OnInit {
  //  PASSER TOUS LES PARAMS DE L'ARTISTE AVEC DES @Input() A PARTIR DE LA PAGE HOME
  public image: any;
  public artistName: string;
  public subtitle: string;
  public description: string;


  constructor() { }

  ngOnInit() {
  }

}
