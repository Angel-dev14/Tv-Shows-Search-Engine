import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../models/character.model';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters$: Observable<Character[]> | undefined;

  @Input() id!: number;

  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    this.characters$ = this.characterService.getCharacters(this.id);
  }
}
