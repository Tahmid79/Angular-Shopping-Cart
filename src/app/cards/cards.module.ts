import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrdComponent } from './crd/crd.component';



@NgModule({
  declarations: [CrdComponent],
  exports: [
    CrdComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardsModule { }
