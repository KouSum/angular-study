import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageHomeComponent } from './form-page-home/form-page-home.component';

const routes: Routes = [
  { path:'form_page_home', component: FormPageHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFormRoutingModule { }
