import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarthomeComponent} from './carthome/carthome.component';

const routes: Routes = [
  {path :'' , component : CarthomeComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartpageRoutingModule { }
