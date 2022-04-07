import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPipeTestComponent } from './my-pipe-test/my-pipe-test.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import {FormsModule} from "@angular/forms";
import {FlyingHeroesImpurePipe, FlyingHeroesPipe} from './flying-heroes.pipe';
import { FetchJsonPipe } from './fetch-json.pipe';



@NgModule({
  declarations: [
    MyPipeTestComponent,
    ExponentialStrengthPipe,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    FetchJsonPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MyPipeModule { }
