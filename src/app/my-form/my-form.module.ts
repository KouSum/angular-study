import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFormRoutingModule } from './my-form-routing.module';
import { FormPageHomeComponent } from './form-page-home/form-page-home.component';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';


@NgModule({
  declarations: [
    FormPageHomeComponent,
    HeroFormReactiveComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    MyFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class MyFormModule { }
