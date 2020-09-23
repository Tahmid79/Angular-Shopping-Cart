import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallComponent } from './small/small.component';



@NgModule({
  declarations: [SmallComponent],
  exports: [
    SmallComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SmallcartModule { }
