import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { MainComponent } from './main/main.component';
import {CardsModule} from '../cards/cards.module';
import {SmallcartModule} from '../smallcart/smallcart.module';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule ,
    NgxPaginationModule ,
    SmallcartModule ,
    CardsModule
  ]
})
export class HomepageModule { }
