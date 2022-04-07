import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {Hero} from "../../hero-class";
import {QuestionBase} from "../../question-base";
import {Observable} from "rxjs";
import {QuestionService} from "../../question.service";
/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log(control.value)
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}
@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: ['./hero-form-reactive.component.scss']
})
export class HeroFormReactiveComponent implements OnInit {
  heroForm = new FormGroup({})
  hero: Hero = {
    id:1,
    name:'',
    alterEgo:'',
    power:'',

  }
  question: QuestionBase<string> = {
    controlType: "",
    key: "name",
    label: "",
    options: [],
    order: 0,
    required: false,
    type: "",
    value: undefined
  }
  questions$!: Observable<QuestionBase<any>[]>;
  constructor(public service: QuestionService) {
    this.questions$ = this.service.getQuestions();
  }

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i)
      ]),
      alterEgo: new FormControl(this.hero.alterEgo),
      power: new FormControl(this.hero.power, Validators.required)
    })

  }

  get name() { return this.heroForm.get('name'); }

  get power() { return this.heroForm.get('power') }

}
