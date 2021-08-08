import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  default = './assets/images/person.png';

  constructor(private http: HttpClient) {}

  getCharacters(id: number): Observable<Character[]> {
    return this.http
      .get<Character[]>(`https://api.tvmaze.com/shows/${id}/cast`)
      .pipe(
        map((actors) => actors.map((actor) => this.format(actor)))
      );
  }
  private format(result: any): Character {
    let character = result.character;
    return {
      id: character.id,
      name: character.name,
      image: character.image?.medium || this.default,
    };
  }
}
