import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizedRoutingModule } from './authorized-routing.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthorizedRoutingModule,
    LayoutModule
  ]
})
export class AuthorizedModule { }
