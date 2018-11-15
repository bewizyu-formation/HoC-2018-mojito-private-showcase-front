import { Component, OnInit } from '@angular/core';
import {Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-artiste-page',
  templateUrl: './artiste-page.component.html',
  styleUrls: ['./artiste-page.component.css']
})
export class ArtistePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // // On transfert les infos de notre artiste vers notre component
    // let allData = combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ]).subscribe( combined => {
    //   let artistId = combined[0].get('artistId');
    //   let artistName = combined[1].get('artistId');
    //   let artistDescription = combined[1].get('artistDescription');
    //   let artistPicture = combined[1].get('artistPicture');
    //   let artistRating = combined[1].get('artistRating');
    // })
  }
}
