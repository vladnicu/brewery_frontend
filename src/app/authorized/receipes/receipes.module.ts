import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceipesRoutingModule } from './receipes-routing.module';
import { MatTableModule } from '@angular/material';

import { IndexComponent } from './components/index/index.component';
import { ShowComponent } from './components/show/show.component';


@NgModule({
  declarations: [
    IndexComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    ReceipesRoutingModule,
    MatTableModule
  ]
})
export class ReceipesModule { }
