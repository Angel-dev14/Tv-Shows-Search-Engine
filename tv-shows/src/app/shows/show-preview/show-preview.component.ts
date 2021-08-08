import { Component, Input, OnInit } from '@angular/core';
import { ShowPreview } from '../models/show-preview.model';

@Component({
  selector: 'app-show-preview',
  templateUrl: './show-preview.component.html',
  styleUrls: ['./show-preview.component.css'],
})
export class ShowPreviewComponent implements OnInit {
  @Input() show: ShowPreview | undefined;

  constructor() {}

  ngOnInit(): void {}
}
