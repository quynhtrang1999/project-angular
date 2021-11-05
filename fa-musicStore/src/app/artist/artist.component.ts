import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  public artistId!: string;
  public tracks: any;

  constructor(private _activatedRoute: ActivatedRoute,
              private _spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.artistId = paramMap.get('id') || '';
    });

    this._spotifyService.getTopTrack(this.artistId).subscribe((data) => {
      this.tracks = data.tracks;
    })
  }

}
