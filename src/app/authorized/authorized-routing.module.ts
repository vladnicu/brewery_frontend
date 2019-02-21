import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { LayoutComponent } from '../layout/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      // {
      //   path: 'dashboard',
      //   loadChildren: './dashboard/dashboard.module#DashboardModule',
      // },
      {
        path: 'receipes',
        loadChildren: './receipes/receipes.module#ReceipesModule'
      },
      {
        path: 'brewery',
        loadChildren: './brewery/brewery.module#BreweryModule'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizedRoutingModule { }
