import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IndexComponent } from './pages/index/index.component';
import { StoreComponent } from './pages/store/store.component';
import { UpdateComponent } from './pages/update/update.component';

const routes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'create', component: StoreComponent },
  { path: 'update', component: UpdateComponent },
];

@NgModule({
  declarations: [
    IndexComponent,
    StoreComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ]
})
export class BreweryModule { }
