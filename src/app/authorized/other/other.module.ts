import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other-routing.module';
import { IndexComponent } from './components/index/index.component';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    OtherRoutingModule,
    MatTableModule
  ]
})
export class OtherModule { }
