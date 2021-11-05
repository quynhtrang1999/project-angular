import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private authorizationKey = 'Bearer BQCR65GYxWhCFafqveiNZXJGnrHbX2yHS0orpUUnIlHO3d9Jrp6gfPQ0lc-VlO4Gs6N-y0HYCv6QCeh-W0mVzaJwbTxs223Ak96BDTACgaLwhL3O53bMFsBlGDQdw15Z9xOCRFPtzk50hNzqPlzZiHZ5pvE0nCk';
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': this.authorizationKey
    })
  };

  constructor(private _httpClient: HttpClient) { }

  public getArtists(searchQuery: string): Observable<any> {
    let artistURL = `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist&market=US`;
    return this._httpClient.get<any>(artistURL, this.httpOptions);
  }

  public getTopTrack(artistId: string): Observable<any> {
    let trackURL = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`;
    return this._httpClient.get<any>(trackURL, this.httpOptions);
  }

}
