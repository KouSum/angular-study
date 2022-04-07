import { Pipe, PipeTransform } from '@angular/core';

interface Hero {
  canFly: boolean
  name: string
}
@Pipe({
  name: 'flyingHeroes',
})
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: Hero[]) {
    return allHeroes.filter(hero => hero.canFly);
  }

}

/////// Identical except for the pure flag
@Pipe({
  name: 'flyingHeroesImpure',
  pure: false
})
export class FlyingHeroesImpurePipe extends FlyingHeroesPipe {}
