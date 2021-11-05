import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private _API_KEY = 'AIzaSyB7rLyalRCAKpAsGID2wX2NbskT0xpTA58';
  private httpOptions = {
    headers : new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    })
  }
  videos: any;
  header = {
    'Access-Control-Allow-Origin': '*'
  }
  constructor(private _http: HttpClient) { }

  search(query: string, result: any, order: any): Observable<any> {
    return this._http.get<any>(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&order=${order}&type=video&key=${this._API_KEY}&maxResults=${result}`, this.httpOptions);
  }

  getPage(query: any, token: any) {
    return this._http.get<any>(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${this._API_KEY}&maxResults=5&pageToken=${token}`, this.httpOptions);
  }
}
