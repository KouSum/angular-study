import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageHomeComponent } from './form-page-home/form-page-home.component';
import {HeroFormReactiveComponent} from "./hero-form-reactive/hero-form-reactive.component";
import {DynamicFormQuestionComponent} from "./dynamic-form-question/dynamic-form-question.component";
import {DynamicFormComponent} from "./dynamic-form/dynamic-form.component";

const routes: Routes = [
  { path:'form_page_home', component: FormPageHomeComponent },
  { path:'hero_form_reactive', component: HeroFormReactiveComponent },
  // { path:'dynamic', component: DynamicFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFormRoutingModule { }
