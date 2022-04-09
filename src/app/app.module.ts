import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormControlDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http'

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component'
import { AdminModule } from './admin/admin.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component'

import { AuthModule } from './auth/auth.module';
import { CrisisCenterComponent } from './crisis-center/crisis-center/crisis-center.component';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { CrisisCenterHomeComponent } from './crisis-center/crisis-center-home/crisis-center-home.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { MyFormModule } from './my-form/my-form.module';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { HeroFormComponent } from './hero-form/hero-form/hero-form.component';
import {HeroFormModule} from "./hero-form/hero-form.module";
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import {MyPipeModule} from "./my-pipe/my-pipe.module";
import {NewAppModule} from "./new-app/new-app.module";
import { ZippyContentDirective } from './new-app/zippy-content.directive';
import { httpInterceptorProviders } from './new-app/http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    LoginComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
    ComposeMessageComponent,
    NameEditorComponent,
    HeroFormComponent,
    ProfileEditorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    AdminModule,
    MyPipeModule,
    MyFormModule,
    HeroFormModule,
    NewAppModule,
    CrisisCenterModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  providers: [
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
