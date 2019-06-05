import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsFeedComponent } from './news-feed/news-feed.component';

const routes: Routes = [
  { path: '', redirectTo: '/NewsFeed', pathMatch: 'full' },
  { path: 'NewsFeed',
  component: NewsFeedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
