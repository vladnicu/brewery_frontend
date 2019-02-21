import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HopsRoutingModule } from './hops-routing.module';
import { IndexComponent } from './components/index/index.component';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    HopsRoutingModule,
    MatTableModule
  ]
})
export class HopsModule { }
