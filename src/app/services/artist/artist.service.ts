import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

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
