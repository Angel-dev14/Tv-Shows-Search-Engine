import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowsComponent } from './shows/shows.component';
import { ShowPreviewComponent } from './shows/show-preview/show-preview.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShowComponent } from './shows/show/show.component';
import { CastComponent } from './shows/show/cast/cast.component';
import { EpisodesComponent } from './shows/show/episodes/episodes.component';
import { CharactersComponent } from './shows/show/characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    ShowPreviewComponent,
    ShowComponent,
    CastComponent,
    EpisodesComponent,
    CharactersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
