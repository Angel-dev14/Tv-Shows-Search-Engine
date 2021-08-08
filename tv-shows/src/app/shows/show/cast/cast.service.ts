import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Actor } from '../../models/actor.model';

@Injectable({
  providedIn: 'root',
})
export class CastService {
  default = './assets/images/person.png';

  constructor(private http: HttpClient) {}

  getCast(id: number): Observable<Actor[]> {
    return this.http
      .get<Actor[]>(`https://api.tvmaze.com/shows/${id}/cast`)
      .pipe(map((actors) => actors.map((actor) => this.format(actor))));
  }
  private format(result: any): Actor {
    let actor = result.person;
    return {
      id: actor.id,
      name: actor.name,
      image: actor.image?.medium || this.default,
    };
  }
}
