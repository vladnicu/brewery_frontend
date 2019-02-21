import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YeastRoutingModule } from './yeast-routing.module';
import { IndexComponent } from './components/index/index.component';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    YeastRoutingModule,
    MatTableModule
  ]
})
export class YeastModule { }
