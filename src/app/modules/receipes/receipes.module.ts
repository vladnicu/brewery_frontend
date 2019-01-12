import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceipesRoutingModule } from './receipes-routing.module';

import { IndexComponent } from './pages/index/index.component';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    ReceipesRoutingModule
  ]
})
export class ReceipesModule { }
