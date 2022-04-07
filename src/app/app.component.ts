import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  birthday = new Date(1988,3,3)
  title = 'Tour of heroes';
  getAnimationData(outlet: RouterOutlet){
    return outlet?.activatedRouteData?.['animation']
  }
}
