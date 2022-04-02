import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFormRoutingModule } from './my-form-routing.module';
import { FormPageHomeComponent } from './form-page-home/form-page-home.component';


@NgModule({
  declarations: [
    FormPageHomeComponent
  ],
  imports: [
    CommonModule,
    MyFormRoutingModule
  ]
})
export class MyFormModule { }
