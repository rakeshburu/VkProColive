import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { OutstandingreportModule } from './outstandingreport/outstandingreport.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { HomeComponent } from './home/home.component';
// import { DashboardComponent } from './dashboard/dashboard.component';


const PAGES_COMPONENTS = [
  PagesComponent,
];


@NgModule({
  imports: [
    CommonModule,
    OutstandingreportModule,
    PagesRoutingModule,
    ThemeModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    HomeComponent,
    // DashboardComponent,
  ],
})
export class PagesModule { }
