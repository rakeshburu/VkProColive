import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutstandingreportComponent } from './outstandingreport.component';

import { RouterModule } from '@angular/router'; 
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';

@NgModule({
  declarations: [OutstandingreportComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule
  ],
  providers: [NbSidebarService]
})
export class OutstandingreportModule { }
