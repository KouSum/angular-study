import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { MyPropsTestComponent } from './my-props-test/my-props-test.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    ManageCrisesComponent,
    ManageHeroesComponent,
    MyPropsTestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
