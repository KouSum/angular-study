import {AfterViewInit, Component, ContentChild, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Comp1Component} from "../comp1/comp1.component";
import { ZippyContentDirective } from '../zippy-content.directive';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit, AfterViewInit {

  size = 1;
  @ViewChild('myChild') myChildComp: Comp1Component | undefined
  propsA = 'ni hao'
  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    console.log(this.myChildComp?.propsA)
  }

  /***
   * 路由传参
   * @param path
   * @param params
   * @param query
   */
  goto(path: string, params:any[] = [], query: {[key:string]:any} = {}){
    this.router.navigate([path, ...params],{queryParams:query}).then(r => {})
  }

  setPropsA(msg:string){
    this.propsA = msg
    this.size = 2
  }

}
