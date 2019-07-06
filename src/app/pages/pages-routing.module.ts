import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { OutstandingreportComponent } from './outstandingreport/outstandingreport.component';
import {HomeComponent} from './home/home.component';
// import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
},
{
  path: 'dashboard',
  loadChildren: './dashboard/dashboard.module#DashboardModule',
},
    {
      path: 'outstandingreport',
      component: OutstandingreportComponent,
    },
    {
      path: '',
      redirectTo: 'outstandingreport',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
