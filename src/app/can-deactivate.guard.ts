import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroDetailsComponent } from './hero-details/hero-details.component';


@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<HeroDetailsComponent> {

  canDeactivate(component: HeroDetailsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(currentRoute.paramMap.get('id'));

    console.log(currentState.url)
    if(!component.hero || component.hero.name === component.editName){
      return true
    }
    return component.dialogService.confirm('Discard changes?');
  }
  
}
