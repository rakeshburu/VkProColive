import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {CxoComponent} from './cxo/cxo.component';
import {SalesComponent} from './sales/sales.component';
import {ServiceComponent} from './service/service.component';
import {PropertyComponent} from './property/property.component';


const routes: Routes = [{
    path: '',
    component: DashboardComponent,
    children: [ {
      path: 'Cxodashboard',
      component: CxoComponent,
    }, {
      path: 'Sales',
      component: SalesComponent,
    }, {
      path: 'Service',
      component: ServiceComponent ,
    }, {
      path: 'Property',
      component: PropertyComponent,
    },
  ],
  }];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class DashboardRoutingModule { }