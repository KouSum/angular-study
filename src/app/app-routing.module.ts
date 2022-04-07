import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import {ProfileEditorComponent} from "./profile-editor/profile-editor.component";
import {MyPipeTestComponent} from "./my-pipe/my-pipe-test/my-pipe-test.component";
import {LinComponent} from "./my-echats/lin/lin.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent, data: { animation: 'heroes' } },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailsComponent, canDeactivate:[CanDeactivateGuard], data: { animation: 'hero' } },
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
  { path: 'profile', component: ProfileEditorComponent },
  { path: 'pipe_test', component: MyPipeTestComponent },
  { path: 'lin', component: LinComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
