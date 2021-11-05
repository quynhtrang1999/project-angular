import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'fa-musicStore';

  public searchQuery: string = '';
  public artists: any;
  constructor(private _spotifyService: SpotifyService) {}

  ngOnInit(): void {

  }

  public searchArtists() {
    this._spotifyService.getArtists(this.searchQuery).subscribe((data) => {
      this.artists = data.artists.items;
    })
  }
}
