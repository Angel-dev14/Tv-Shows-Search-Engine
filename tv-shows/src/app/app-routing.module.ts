import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './shows/show/show.component';
import { ShowsComponent } from './shows/shows.component';

const routes: Routes = [
  { path: 'search', component: ShowsComponent },
  { path: 'show/:id', component: ShowComponent },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
