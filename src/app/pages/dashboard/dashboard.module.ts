import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {CxoComponent} from './cxo/cxo.component';
import {SalesComponent} from './sales/sales.component';
import {ServiceComponent} from './service/service.component';
import {PropertyComponent} from './property/property.component';

const components = [
    DashboardComponent,
    CxoComponent,
    SalesComponent,
    ServiceComponent,
    PropertyComponent
];

@NgModule({
  imports: [
    ThemeModule,
    DashboardRoutingModule,
  ],
  declarations: [
    ...components,
  ],
})
export class DashboardModule { }
