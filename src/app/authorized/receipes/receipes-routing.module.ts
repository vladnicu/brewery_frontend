import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { ShowComponent } from './components/show/show.component';
// import { StoreComponent } from './pages/store/store.component';
// import { UpdateComponent } from './pages/update/update.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: 'receipes',
    component: IndexComponent
  },
  {
    path: 'show',
    component: ShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceipesRoutingModule { }
