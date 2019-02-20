import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
