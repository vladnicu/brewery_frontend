import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IndexComponent } from './pages/index/index.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { StoreComponent } from './pages/store/store.component';

const routes: Routes = [
  { path: '', component: IndexComponent, canActivate: [AuthGuard], pathMatch: 'full'},
  { path: 'create', component: StoreComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    IndexComponent,
    StoreComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ]
})
export class BreweryModule { }
