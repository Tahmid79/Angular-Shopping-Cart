import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartpageRoutingModule } from './cartpage-routing.module';
import { CarthomeComponent } from './carthome/carthome.component';


@NgModule({
  declarations: [CarthomeComponent],
  imports: [
    CommonModule,
    CartpageRoutingModule
  ]
})
export class CartpageModule { }
