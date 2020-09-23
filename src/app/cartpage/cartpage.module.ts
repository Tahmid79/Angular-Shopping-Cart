import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartpageRoutingModule } from './cartpage-routing.module';
import { CarthomeComponent } from './carthome/carthome.component';
import {ListingModule} from '../listing/listing.module';
import {TotalsModule} from '../totals/totals.module';


@NgModule({
  declarations: [CarthomeComponent],
  imports: [
    CommonModule,
    CartpageRoutingModule ,
    ListingModule , TotalsModule
  ]
})
export class CartpageModule { }
