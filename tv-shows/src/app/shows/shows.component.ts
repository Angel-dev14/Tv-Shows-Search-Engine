import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs/operators';
import { ShowPreview } from './models/show-preview.model';
import { ShowsService } from './shows.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css'],
})
export class ShowsComponent implements OnInit {
  searchBar = new FormControl('');

  search$ = new Subject<string>();

  shows: ShowPreview[] | undefined;

  searchTerm: string | undefined;

  loading = false;

  constructor(
    private showService: ShowsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchBar.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(() =>
        this.router.navigate([], {
          queryParams: { search: this.searchBar.value },
        })
      );

    this.search$
      .pipe(switchMap((searchTerm) => this.showService.searchShows(searchTerm)))
      .subscribe((result) => {
        this.shows = result;
        this.loading = false;
      });

    this.route.queryParamMap
      .pipe(map((param) => param.get('search')))
      .subscribe((result) => {
        if (result) {
          this.searchTerm = result;
          this.loading = true;
        } else {
          this.searchTerm = '';
        }
        this.searchBar.setValue(this.searchTerm);
        this.search$.next(this.searchTerm);
      });
  }
  onSubmit()
  {
    this.search$.next(this.searchBar.value);
  }
}
