import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Episode } from '../../models/episode.model';
import { EpisodesService } from './episodes.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
})
export class EpisodesComponent implements OnInit {
  episodes$: Observable<Episode[]> | undefined;

  @Input() id!: number;

  constructor(
    private episodeService: EpisodesService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.episodes$ = this.episodeService.getEpisodes(this.id);
  }

  open(content: TemplateRef<string>) {
    this.modalService.open(content, { scrollable: true });
  }
}
