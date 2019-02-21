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
      },
      {
        path: 'fermentables',
        loadChildren: './fermentables/fermentables.module#FermentablesModule'
      },
      {
        path: 'hops',
        loadChildren: './hops/hops.module#HopsModule'
      },
      {
        path: 'yeast',
        loadChildren: './yeast/yeast.module#YeastModule'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizedRoutingModule { }
