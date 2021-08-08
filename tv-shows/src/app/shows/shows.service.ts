import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShowPreview } from './models/show-preview.model';
import { map } from 'rxjs/operators';
import { Show } from './models/show.model';

@Injectable({
  providedIn: 'root',
})
export class ShowsService {
  default = './assets/images/default.png';

  constructor(private http: HttpClient) {}

  searchShows(searchTerm: string): Observable<ShowPreview[]> {
    return this.http
      .get<ShowPreview[]>(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .pipe(
        map((shows) => shows.map((show) => this.formatShowAsPreview(show)))
      );
  }
  getShowById(id: number): Observable<Show> {
    return this.http
      .get<Show>(`https://api.tvmaze.com/shows/${id}`)
      .pipe(map((show) => this.formatShow(show)));
  }

  private formatShowAsPreview(result: any): ShowPreview {
    let show = result.show;
    return {
      id: show.id,
      name: show.name,
      summary: show.summary,
      image: show.image?.medium || this.default,
      genres: show.genres,
      score: result.score,
    };
  }
  private formatShow(show: any): Show {
    return {
      id: show.id,
      url: show.url,
      name: show.name,
      language: show.language,
      status: show.status,
      summary: show.summary,
      premirered: new Date(show.premiered),
      image: show.image?.original || this.default,
      officialSite: show.officialSite,
      genres: show.genres,
    };
  }
}
