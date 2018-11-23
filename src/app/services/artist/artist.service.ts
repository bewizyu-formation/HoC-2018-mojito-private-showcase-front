import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  /* ------------------  OPERATIONS SUR LES ARTISTES  ------------------*/

  // ON RECUPERE NOS ARTISTES PAR DEPARTEMENTS
  getAll() {
    return this.http.get(this.url + '/artistes/list');
  }

  // ON RECUPERE UN ARTISTE
  getArtist(artist) {
    return this.http.get(this.url + '/' + artist.id);
  }

  create(artist) {
    return this.http.post(this.url, JSON.stringify(artist));
  }

  update(artist) {
    return this.http.put(this.url + '/' + artist.id, JSON.stringify(artist));
  }

  delete(artist) {
    return this.http.delete(this.url + '/' + artist.id);
  }

  handlingErrors() {

  }
}
