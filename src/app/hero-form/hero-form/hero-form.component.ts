import { Component, OnInit } from '@angular/core';
import { Hero } from "../../hero-class";
import {HttpClient} from "@angular/common/http";
import {JsonDataService} from "../json-data.service";
import {debounceTime, interval, switchMap} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {
  constructor(private jsonData: JsonDataService) { }

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet')

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit(): void {
    this.jsonData.getPost().subscribe(res=>{
      console.log(res)
    })
  }


  newHero(){
    this.model = new Hero(42, '', '')
  }

}
