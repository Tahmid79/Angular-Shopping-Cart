import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { InfoComponent } from './info/info.component';
import {FormsModule} from '@angular/forms';
import {SmallcartModule} from '../smallcart/smallcart.module';

@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SmallcartModule ,
    FormsModule
  ]
})
export class DetailsModule { }
