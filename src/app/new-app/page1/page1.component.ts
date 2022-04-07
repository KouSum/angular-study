import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Comp1Component} from "../comp1/comp1.component";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit, AfterViewInit {

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
  }
}
