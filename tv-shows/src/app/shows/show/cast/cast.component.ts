import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from '../../models/actor.model';
import { CastService } from './cast.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css'],
})
export class CastComponent implements OnInit {
  actors$: Observable<Actor[]> | undefined;

  @Input() id!: number;

  constructor(private castService: CastService) {}

  ngOnInit(): void {
    this.actors$ = this.castService.getCast(this.id);
  }
}
