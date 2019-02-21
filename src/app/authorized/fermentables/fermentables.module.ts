import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FermentablesRoutingModule } from './fermentables-routing.module';
import { IndexComponent } from './components/index/index.component';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    FermentablesRoutingModule,
    MatTableModule
  ]
})
export class FermentablesModule { }
