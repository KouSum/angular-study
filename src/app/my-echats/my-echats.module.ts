import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyEchatsRoutingModule } from './my-echats-routing.module';
import { LinComponent } from './lin/lin.component';


@NgModule({
  declarations: [
    LinComponent
  ],
  imports: [
    CommonModule,
    MyEchatsRoutingModule
  ]
})
export class MyEchatsModule { }
