import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { Show } from '../models/show.model';
import { ShowsService } from '../shows.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  show: Show | undefined;

  show$: Observable<Show> | undefined;

  id: number | undefined;

  constructor(
    private showService: ShowsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.show$ = this.route.paramMap.pipe(
      map((params) => +params.get('id')!),
      tap((id) => (this.id = id)),
      mergeMap((id) => this.showService.getShowById(id))
    );
  }
}
