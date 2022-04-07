import { Component, OnInit } from '@angular/core';
import {Hero} from "../../hero";
import {interval, Observable} from "rxjs";
import {map, take} from "rxjs/operators";

const HEROES = [
  { id: 11, name: 'Dr Nice', canFly: true },
  { id: 12, name: 'Narco', canFly: true },
  { id: 13, name: 'Bombasto', canFly: true },
  { id: 14, name: 'Celeritas', canFly: true },
  { id: 15, name: 'Magneta', canFly: true },
  { id: 16, name: 'RubberMan', canFly: true },
  { id: 17, name: 'Dynama', canFly: true },
  { id: 18, name: 'Dr IQ', canFly: true },
  { id: 19, name: 'Magma', canFly: true },
  { id: 20, name: 'Tornado', canFly: false }
];
@Component({
  selector: 'app-my-pipe-test',
  templateUrl: './my-pipe-test.component.html',
  styleUrls: ['./my-pipe-test.component.scss']
})
export class MyPipeTestComponent implements OnInit {
  power = 5;
  factor = 1;



  birthday = new Date(1988,3,3)
  amount = 222
  constructor() { }
  toggle = true;
  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
  ngOnInit(): void {
    this.reset();
  }



  heroes: any[] = [];
  canFly = true;

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    const hero = {name, canFly: this.canFly};
    this.heroes.push(hero);
  }

  reset() { this.heroes = HEROES.slice(); }



  message$: Observable<string> | undefined;

  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  resend() {
    this.message$ = this.getResendObservable();
  }

  private getResendObservable() {
    return interval(500).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    );
  }
}
