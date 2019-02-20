import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { AuthGuard } from '../../core/guards/auth.guard';
// import { StoreComponent } from './pages/store/store.component';
// import { UpdateComponent } from './pages/update/update.component';

const routes: Routes = [
  { path: '', component: IndexComponent, canActivate: [AuthGuard], pathMatch: 'full' },
  // { path: 'create', component: StoreComponent, canActivate: [AuthGuard] },
  // { path: 'update', component: UpdateComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceipesRoutingModule { }
