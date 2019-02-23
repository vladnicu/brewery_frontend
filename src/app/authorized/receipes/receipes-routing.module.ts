import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { ShowComponent } from './components/show/show.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'receipes',
    pathMatch: 'full'
  },
  {
    path: 'receipes',
    component: IndexComponent
  },
  {
    path: ':id',
    component: ShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceipesRoutingModule { }
