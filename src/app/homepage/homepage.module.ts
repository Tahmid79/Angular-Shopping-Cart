import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { MainComponent } from './main/main.component';
import {CardsModule} from '../cards/cards.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule ,
    CardsModule
  ]
})
export class HomepageModule { }
