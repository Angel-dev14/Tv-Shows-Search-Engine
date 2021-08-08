import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Episode } from '../../models/episode.model';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  default = './assets/images/default.png';

  constructor(private http: HttpClient) {}

  getEpisodes(id: number): Observable<Episode[]> {
    return this.http
      .get<Episode[]>(`https://api.tvmaze.com/shows/${id}/episodes`)
      .pipe(map((episodes) => episodes.map((episode) => this.format(episode))));
  }
  private format(result: any): Episode {
    let episode = result;
    return {
      id: episode.id,
      name: episode.name,
      season: episode.season,
      episode: episode.number,
      airDate: episode.airdate,
      runtime: episode.runtime,
      image: episode.image?.original || this.default,
      summary: episode.summary,
    };
  }
}
