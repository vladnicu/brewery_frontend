import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FermentablesRoutingModule } from './fermentables-routing.module';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    FermentablesRoutingModule
  ]
})
export class FermentablesModule { }
