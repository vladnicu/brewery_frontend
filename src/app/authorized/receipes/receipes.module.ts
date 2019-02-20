import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceipesRoutingModule } from './receipes-routing.module';

import { IndexComponent } from './components/index/index.component';
import { ShowComponent } from './components/show/show.component';

@NgModule({
  declarations: [IndexComponent, ShowComponent],
  imports: [
    CommonModule,
    ReceipesRoutingModule
  ]
})
export class ReceipesModule { }
